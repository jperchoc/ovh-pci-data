import { derived } from 'svelte/store';
import { projectIdStore } from './projectsStore';
import type { NavItem } from '$types/nav';

const navLinks = derived(projectIdStore, (projectId) => [
    { 
        label: "Dashboard",
        link: `/project/${projectId}`,
        activeExact: true,
        disabled: !projectId,
        items: []
    } as NavItem,
    { 
        label: "Storage",
        link: `/project/${projectId}/storage`,
        disabled: !projectId,
        items: [
            { 
                label: "Databases",
                link: `/project/${projectId}/database`,
                disabled: !projectId,
            } as NavItem,
        ]
    } as NavItem,
    { 
        label: "Data Processing",
        link: null,
        items:  [
            { 
                label: "Job",
                link: `/project/${projectId}/dataprocessing/job`,
                disabled: !projectId,
            } as NavItem,
            { 
                label: "Notebook",
                link: `/project/${projectId}/dataprocessing/notebook`,
                disabled: !projectId,
            } as NavItem,
        ]
    } as NavItem,
    { 
        label: "Data Integration",
        link: `/project/${projectId}/dataintegration/dashboard`,
        disabled: !projectId,
        items:  [
            { 
                label: "Cli",
                link: `/project/${projectId}/dataintegration/cli`,
                disabled: !projectId,
            } as NavItem,
        ]
    } as NavItem,
    { 
        label: "AI",
        link: `/project/${projectId}/ai/dashboard`,
        disabled: !projectId,
        items: [
            { 
                label: "Training",
                link: `/project/${projectId}/ai/training`,
                disabled: !projectId,
            } as NavItem,
            { 
                label: "Notebook",
                link: `/project/${projectId}/ai/notebook`,
                disabled: !projectId,
            } as NavItem,
            { 
                label: "Deploy",
                link: `/project/${projectId}/ai/deploy`,
                disabled: !projectId,
            } as NavItem,
        ]
    } as NavItem,
    { 
        label: "Settings",
        link: `/project/settings`,
        disabled: false,
        items: []
    } as NavItem
]
);

export default navLinks; 