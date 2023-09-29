<script lang="ts">
	import { Button } from '$components/ui/button';
    import { P, H2, H3, H4, Code } from '$components/ui/typography';
    import Tutorial from '$components/pages/onboarding/Tutorial.svelte';
    import Skeleton from '$components/ui/skeleton/skeleton.svelte';
    import type { PageData } from './$types';
    import { page } from '$app/stores';
    import RegistriesTable from './RegistriesTable.svelte';
	import type { ovhapi } from '$types/ovh';
    export let data: PageData;

    $: regions = data.regions;

	let selectedRegion: string;
	$: selectedRegion = regions[0].id;

	interface IDictionaryRegion {
		[index: string]: ovhapi.cloud.project.ai.capabilities.Region;
	}

	$: mappedRegion = regions.reduce(
		(acc: IDictionaryRegion, curr: ovhapi.cloud.project.ai.capabilities.Region) => {
			acc[curr.id] = curr;
			return acc;
		},
		{}
	);

	$: selectedRegionObject = mappedRegion[selectedRegion];

	function handleSelectChange(event: Event) {
		selectedRegion = (event.target as HTMLSelectElement).value;
	}

</script>

<div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
    <div class="col-span-2">
        <H2>Registres Docker</H2>
        <P class="text-justify"
            >Un registre docker vous permet de stocker vos images logicielles afin de pouvoir
            facilement y accéder lors de vos entraînements ou déploiements.</P
        >
        <H3>Registres Docker Privés</H3>
        <P class="text-justify"
            >Vous pouvez gérer ici vos Docker Registries privés. Vous pourrez ensuite facilement
            lancer des jobs et des apps avec ces images.</P
        >
        <P class="text-justify"
            >Vous pouvez choisir d'utiliser un Registre privé managé OVHcloud avec toutes les
            fonctionnalités du projet open source Harbor pour en garantir la sécurité. Ce service est
            disponible via le réseau haute performance d’OVHcloud afin d’accélérer vos déploiements.</P
        >
        <Button>Gérer mes Managed Private Registries</Button>
        <P class="text-justify"
            >Il vous est également possible d'utiliser votre propre Docker Registry.</P
        >
        <Button>+ Ajouter</Button>
        {#await data.streamed.registries}
            <Skeleton class="h-8" />
        {:then registries} 
            <RegistriesTable {registries} />
        {/await} 

        <H3>Registres docker partagés</H3>

        <span>Sélectionnez la région que vous souhaitez utiliser :</span>
        <select class="select mb-2" value={selectedRegion} on:change={handleSelectChange}>
            {#each regions as region}
                <option value={region.id}>{region.id}</option>
            {/each}
        </select>

        <H4>Docker Registry POPOVER A AJOUTER</H4>
        <span class="text-justify">{selectedRegionObject.registryUrl}</span>
        <H4>Projet Public Cloud</H4>
        <span class="py-2">{$page.params.projectId}</span>
        <P>Vous pouvez vous connecter au Docker Registry partagé via la commande suivante :</P>
        <Code class="py-2"
            >docker login {selectedRegionObject.registryUrl}/{$page.params.projectId}</Code
        >
        <P
            >L'authentification sur la plateforme peut se faire via tous les utilisateurs configurés
            au sein du même projet Public Cloud.</P
        >
        <P>Vous pouvez ensuite marquer vos images et les charger sur le registre.</P>

        <pre><Code>{`docker tag <imageName>${selectedRegionObject.registryUrl}/${$page.params.projectId}</imageName>`}<br/>{`docker push ${selectedRegionObject.registryUrl}/${$page.params.projectId}</imageName>          `}</Code></pre>
        <P>Votre image est maintenant utilisable dans un job ou une app.</P>
    </div>
    <div class="col-span-1">
        <H2>Tutorial</H2>
        <div class="row-span border-top-0">
            <Tutorial>
                <svelte:fragment slot="guideName">CLI - Installation (EN)</svelte:fragment>
                <svelte:fragment slot="guideDescription"
                    >Découvrez comment installer notre CLI en quelques click qui valent mieux qu'une
                    grande claque</svelte:fragment
                >
                <svelte:fragment slot="guideLink"
                    ><a
                        href="https://help.ovhcloud.com/csm/fr-public-cloud-data-analytics-data-integration-cli-installation?id=kb_article_view&sysparm_article=KB0058608"
                        >En savoir plus</a
                    ></svelte:fragment
                >
                <svelte:fragment slot="guideName1">CLI - Installation (EN)</svelte:fragment>
                <svelte:fragment slot="guideDescription1"
                    >Découvrez comment installer notre CLI en quelques click qui valent mieux qu'une
                    grande claque</svelte:fragment
                >
                <svelte:fragment slot="guideLink1"
                    ><a
                        href="https://help.ovhcloud.com/csm/fr-public-cloud-data-analytics-data-integration-cli-installation?id=kb_article_view&sysparm_article=KB0058608"
                        >En savoir plus</a
                    ></svelte:fragment
                >
                <svelte:fragment slot="guideName2">CLI - Installation (EN)</svelte:fragment>
                <svelte:fragment slot="guideDescription2"
                    >Découvrez comment installer notre CLI en quelques click qui valent mieux qu'une
                    grande claque</svelte:fragment
                >
                <svelte:fragment slot="guideLink2"
                    ><a
                        href="https://help.ovhcloud.com/csm/fr-public-cloud-data-analytics-data-integration-cli-installation?id=kb_article_view&sysparm_article=KB0058608"
                        >En savoir plus</a
                    ></svelte:fragment
                >
                <svelte:fragment slot="guideLinkGene"
                    ><a
                        href="https://help.ovhcloud.com/csm/fr-documentation-public-cloud-ai-and-machine-learning?id=kb_browse_cat&kb_id=574a8325551974502d4c6e78b7421938&kb_category=1f34d555f49801102d4ca4d466a7fd7d"
                        >Parcourir l'ensemble de la documentation -></a
                    ></svelte:fragment
                >
            </Tutorial>
        </div>
    </div>
</div>