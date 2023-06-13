/**
 * Fetch ovh api description and convert it to Typescript types
 */

import fs from 'fs';
import beautify from 'js-beautify/js/index.js';

const outputLocation = './src/lib/types/ovh/index.d.ts';
const JSONFiles = [
    'https://api.ovh.com/1.0/cloud.json',
    'https://api.ovh.com/1.0/me.json'
];

const responses = await Promise.all(JSONFiles.map(f => fetch(f)));
const jsonResponses = await Promise.all(responses.map(r => r.json()));

const models = jsonResponses.reduce((acc, curr) => ({...acc, ...curr.models}), {}); 

const sanitizePropName = (propName) => {
    const illegalChars = ['-'];
    let needSanitize = false;
    illegalChars.forEach(c => {
        if (propName.includes(c)) {
            needSanitize = true;
        }
    })
    return needSanitize ? `"${propName}"` : propName;
}

const getType = (fullType) => {
    const isArray = fullType.endsWith('[]');
    switch (fullType.replace('[]','')) {
        case 'datetime':
        case 'uuid':
        case 'ipBlock':
        case 'ip':
        case 'password':            
        case 'date':
        case 'time':
            return `string${isArray?'[]':''}`;
        case 'long':
            return `number${isArray?'[]':''}`;
    }
    //handle bugs like 'coreTypes.AccountId:string'
    if (fullType.includes(':')) {
        return fullType.split(':')[1];
    }
    //handle maps
    try {
        if (fullType.includes('map[')) {
            const type1 = fullType.split('[')[1].split(']')[0];
            const type2 = fullType.split(']')[1];
            return `Record<${getType(type1)}, ${getType(type2)}>`;
        }   
    } catch (e) {
        console.log(fullType)
    }
    return fullType;
}

const propertyToTs = (property) => {
    return (` /** ${property.description ?? property.name} */
        ${sanitizePropName(property.name)}${property.canBeNull ? '?':''}: ${property.fullType ? getType(property.fullType) : getType(property.type)};`
    )
}

const modelToTs = (model) => {
    if (model.enum) {
        return (`/** ${model.description ?? model.id} */
        enum ${model.id}{
            ${model.enum.map(e => `"${e}"`).join(',')}
        }`);
    } else {
        return (`/** ${model.description ?? model.id} */
        interface ${model.id}{
            ${
                Object.entries(model.properties).map(e => propertyToTs({...e[1], name: e[0]})).join('\r\n')
            }
        }`);
    }
};

const namespaceToTs = (namespace) => {
    return (`namespace ${namespace.name} { ${namespace.namespaces.map(n => namespaceToTs(n)).join('\r\n')} ${namespace.models.map(m => modelToTs(m)).join('\r\n')}
    }`)
}

const ovhApi = {
    name: 'ovhapi',
    models: [],
    namespaces: []
}

for (const modelName in models) {
    const model = models[modelName];
    const { namespace } = model;
    const namespaces = namespace.split('.');
    let lastNamespaceObject = ovhApi;
    for(let i = 0; i < namespaces.length; i++) {
        const ns = namespaces[i];
        let namespaceObject = lastNamespaceObject.namespaces.find(n => n.name === ns);
        if (!namespaceObject) {
            namespaceObject = {
                name: ns,
                models: [],
                namespaces: []
            };
            lastNamespaceObject.namespaces.push(namespaceObject);
        }
        if (i === namespaces.length - 1) {
            namespaceObject.models.push(model);
        }
        lastNamespaceObject = namespaceObject;
        
    }
}
const types = (`
/**
 * Types for OVHcloud API
 * This file has been automatically created. Do not edit it.
 * Creation date: ${new Date().toISOString()}
 * Author: Jonathan Perchoc 
*/
declare ${beautify(namespaceToTs(ovhApi))}
`)
fs.writeFileSync(outputLocation, types);