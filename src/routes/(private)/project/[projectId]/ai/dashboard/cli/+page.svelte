<script lang="ts">
	import { A, P, H2, H3, H4, Code } from '$components/ui/typography';
	import Tutorial from '$components/pages/onboarding/Tutorial.svelte';
	import type { PageData } from './$types';
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
		<H2>Command Line Interface (CLI)</H2>
		<P class="text-justify"
			>Utilisez notre interface ovhai afin d'accéder et gérer vos notebooks, jobs et apps en lignes
			de commande (CLI).</P
		>
		<H3>Installation</H3>
		<span>Sélectionnez la région que vous souhaitez utiliser :</span>
		<select class="select mb-2" value={selectedRegion} on:change={handleSelectChange}>
			{#each regions as region}
				<option value={region.id}>{region.id}</option>
			{/each}
		</select>

		<Code>{`curl -s ${selectedRegionObject.cliInstallUrl}/install.sh | bash`}</Code>
		<H3>Authentification</H3>
		<P class="text-justify"
			>L'authentification sur la plateforme peut se faire via tous les utilisateurs et AI tokens
			configurés au sein du même projet Public Cloud.</P
		>
		<A href="">Gerer mes utilisateurs et token</A>
		<P>Les étapes d'authentification sont les suivantes :</P>
		<ul>
			<li>lancer ovhai login</li>
			<li>sélectionner le type d'authentification dans le terminal ou via navigateur</li>
			<li>renseigner les informations de connexion de l'utilisateur voulu ou le token associé</li>
			<li>ce processus est maintenant termin</li>
		</ul>

		<H3>Commandes</H3>
		<P>Lancez ovhai --help afin d'obtenir une liste des actions disponibles.</P>
	</div>
	<div class="col-span-1">
		<H2>Tutorial</H2>
		<div class="row-span border-top-0">
			<Tutorial>
				<svelte:fragment slot="guideName">CLI - Installation (EN)</svelte:fragment>
				<svelte:fragment slot="guideDescription"
					>Découvrez comment installer notre CLI en quelques click qui valent mieux qu'une grande
					claque</svelte:fragment
				>
				<svelte:fragment slot="guideLink"
					><a
						href="https://help.ovhcloud.com/csm/fr-public-cloud-data-analytics-data-integration-cli-installation?id=kb_article_view&sysparm_article=KB0058608"
						>En savoir plus</a
					></svelte:fragment
				>
				<svelte:fragment slot="guideName1">CLI - Installation (EN)</svelte:fragment>
				<svelte:fragment slot="guideDescription1"
					>Découvrez comment installer notre CLI en quelques click qui valent mieux qu'une grande
					claque</svelte:fragment
				>
				<svelte:fragment slot="guideLink1"
					><a
						href="https://help.ovhcloud.com/csm/fr-public-cloud-data-analytics-data-integration-cli-installation?id=kb_article_view&sysparm_article=KB0058608"
						>En savoir plus</a
					></svelte:fragment
				>
				<svelte:fragment slot="guideName2">CLI - Installation (EN)</svelte:fragment>
				<svelte:fragment slot="guideDescription2"
					>Découvrez comment installer notre CLI en quelques click qui valent mieux qu'une grande
					claque</svelte:fragment
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