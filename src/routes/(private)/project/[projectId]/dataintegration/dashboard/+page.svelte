<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { Card, CardContent, CardHeader } from '$components/ui/card';
	import { POLLING_INTERVAL } from '$lib/global.constants';
	import { t } from '$lib/translations/translations';
	import WorkflowsTable from './WorkflowsTable.svelte';
	import Onboarding from '../../../../../../lib/components/layout/General/Onboarding.svelte';
	import Tutorial from '../../../../../../lib/components/layout/General/Tutorial.svelte';
	import onboardingImgPC from '$assets/data-integration.png';
	import onboardingImgMobile from '$assets/data-integration-mobile.png';

	export let data: PageData;
	$: workflows = data.workflows;

	onMount(() => {
		const it = setInterval(() => {
			if (document && !document.hidden) {
				invalidate(`/api/ovh/cloud/project/${$page.params.projectId}/dataIntegration/workflows`);
			}
		}, POLLING_INTERVAL);
		return () => {
			clearInterval(it);
		};
	});
</script>

{#if workflows.length > 0}
	<Card>
		<CardHeader>
			<h2 class="font-bold text-xl">{$t('dataintegration.workflow.list.header')}</h2>
		</CardHeader>
		<CardContent class="p-0 pb-4">
			<WorkflowsTable {workflows} />
		</CardContent>
	</Card>
{:else}
	<div class="grid grid-cols-1 md:grid-cols-3 gap-2" />
	<Onboarding>
		<svelte:fragment slot="image">
			<div class="hidden md:block">
				<img src={onboardingImgPC} alt="myImage" />
			</div>
			<div class="block md:hidden">
				<img src={onboardingImgMobile} alt="myImage" />
			</div>
		</svelte:fragment>
		<svelte:fragment slot="title">Data Integration</svelte:fragment>
		<svelte:fragment slot="subtitle">La circulation des données simplifiée</svelte:fragment>
		<svelte:fragment slot="paragraphe"
			>Vous souhaitez ingérer des données et construire des pipelines de données facilement ?
			Automatisez la circulation de vos données grâce à notre solution Data Integration. Vous
			bénéficiez d'un catalogue de sources et de destinations pour configurer le transport de vos
			données quelles soient sous forme de fichier (Object Storage, HTTP files, SFTP, FTP), en base
			de données (PostgreSQL, MySQL, MongoDB, Oracle, SQL Server), ou encore dans un moteur de
			recherche (Elasticsearch, OpenSearch). Rejoignez notre bêta gratuite en cliquant sur le bouton
			ci-dessous.</svelte:fragment
		>
		<svelte:fragment slot="actionLink">Explorer vos intégrations de données</svelte:fragment>
	</Onboarding>

	<Tutorial>
		<svelte:fragment slot="guideName">CLI - Installation (EN)</svelte:fragment>
		<svelte:fragment slot="guideDescription"
			>Découvrez comment installer notre CLI en quelques click qui valent mieux qu'une grande claque</svelte:fragment
		>
		<svelte:fragment slot="guideLink"
			><a
				href="https://help.ovhcloud.com/csm/fr-public-cloud-data-analytics-data-integration-cli-installation?id=kb_article_view&sysparm_article=KB0058608"
				>En savoir plus</a
			></svelte:fragment
		>
	</Tutorial>
	<Tutorial>
		<svelte:fragment slot="guideName">CLI - Installation (EN)</svelte:fragment>
		<svelte:fragment slot="guideDescription"
			>Découvrez comment installer notre CLI en quelques click qui valent mieux qu'une grande claque</svelte:fragment
		>
		<svelte:fragment slot="guideLink"
			><a
				href="https://help.ovhcloud.com/csm/fr-public-cloud-data-analytics-data-integration-cli-installation?id=kb_article_view&sysparm_article=KB0058608"
				>En savoir plus</a
			></svelte:fragment
		>
	</Tutorial>
	<Tutorial>
		<svelte:fragment slot="guideName">CLI - Installation (EN)</svelte:fragment>
		<svelte:fragment slot="guideDescription"
			>Découvrez comment installer notre CLI en quelques click qui valent mieux qu'une grande claque</svelte:fragment
		>
		<svelte:fragment slot="guideLink"
			><a
				href="https://help.ovhcloud.com/csm/fr-public-cloud-data-analytics-data-integration-cli-installation?id=kb_article_view&sysparm_article=KB0058608"
				>En savoir plus</a
			></svelte:fragment
		>
	</Tutorial>
{/if}
