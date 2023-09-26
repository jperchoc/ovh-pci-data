<script lang="ts">
	import exploreImg from '$assets/explore.png';
	import stockImg from '$assets/stock.png';
	import trainImg from '$assets/train.png';
	import deployImg from '$assets/serve.png';
	import reversImg from '$assets/revers.png';
	import { A, H1, P, H2, H3 } from '$components/ui/typography';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$components/ui/tabs';
	import WorkflowAi from './WorkflowAI.svelte';
	import type { PageData } from './$types';
	import Badge from '$components/ui/badge/badge.svelte';
	import { ovhapi } from '$types/ovh';
	import AdvAi from './AdvAI.svelte';
	import { page } from '$app/stores';
	import Tutorial from '$components/pages/onboarding/Tutorial.svelte';
	import Button from '$components/ui/button/button.svelte';

	export let data: PageData;

	$: newProject = data.notebooks.length + data.jobs.length + data.apps.length === 0;

	type AppsByType = {
		running: ovhapi.cloud.project.ai.app.App[];
		stopped: ovhapi.cloud.project.ai.app.App[];
	};
	type JobsByType = {
		running: ovhapi.cloud.project.ai.job.Job[];
		done: ovhapi.cloud.project.ai.job.Job[];
	};
	type NotebooksByType = {
		running: ovhapi.cloud.project.ai.notebook.Notebook[];
		stopped: ovhapi.cloud.project.ai.notebook.Notebook[];
	};

	$: appsByStatus = data.apps.reduce(
		(accumulator: AppsByType, currentValue: ovhapi.cloud.project.ai.app.App) => {
			if (currentValue.status.state === ovhapi.cloud.project.ai.app.AppStateEnum.RUNNING) {
				accumulator.running.push(currentValue);
			} else if (currentValue.status.state === ovhapi.cloud.project.ai.app.AppStateEnum.STOPPED) {
				accumulator.stopped.push(currentValue);
			}
			return accumulator;
		},
		{
			running: [],
			stopped: []
		}
	);

	$: jobsByStatus = data.jobs.reduce(
		(accumulator: JobsByType, currentValue: ovhapi.cloud.project.ai.job.Job) => {
			if (currentValue.status.state === ovhapi.cloud.project.ai.job.JobStateEnum.RUNNING) {
				accumulator.running.push(currentValue);
			} else if (currentValue.status.state === ovhapi.cloud.project.ai.job.JobStateEnum.DONE) {
				accumulator.done.push(currentValue);
			}
			return accumulator;
		},
		{
			running: [],
			done: []
		}
	);

	$: notebooksByStatus = data.notebooks.reduce(
		(accumulator: NotebooksByType, currentValue: ovhapi.cloud.project.ai.notebook.Notebook) => {
			if (
				currentValue.status.state === ovhapi.cloud.project.ai.notebook.NotebookStateEnum.RUNNING
			) {
				accumulator.running.push(currentValue);
			} else if (
				currentValue.status.state === ovhapi.cloud.project.ai.notebook.NotebookStateEnum.STOPPED ||
				currentValue.status.state === ovhapi.cloud.project.ai.notebook.NotebookStateEnum.STOPPING
			) {
				accumulator.stopped.push(currentValue);
			}
			return accumulator;
		},
		{
			running: [],
			stopped: []
		}
	);
</script>

<div class="pb-4">
	<H1>AI Dashboard</H1>
	<P
		>L'intelligence artificielle (IA) sonne souvent comme une technologie réservée aux initiés. Chez
		OVHcloud, nous sommes convaincus de l'incroyable potentiel de cette pratique dans chaque secteur
		d'activité. Nous concentrons donc nos efforts pour fournir des outils capables de résoudre les
		défis auxquels font face les organisations : traitement de données, exploration, entraînement et
		déploiement de modèles... Notre but : rendre l'utilisation du Machine Learning simple pour tous
		les profils d'utilisateurs. Découvrez l'ensemble de notre offre AI Tools !</P
	>
	<H2 />
</div>

<Tabs>
	<TabsList>
		<TabsTrigger value="home">Tableau de bord</TabsTrigger>
		<TabsTrigger value="user-tokens">Utilisateurs & Tokens</TabsTrigger>
		<TabsTrigger value="registries">Registres Docker</TabsTrigger>
		<TabsTrigger value="cli">Command Line Interface</TabsTrigger>
	</TabsList>
	<TabsContent value="home">
		<div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
			<div class="col-span-2">
				<div class="grid md:grid-cols-4 grid-cols-1 gap-2">
					<WorkflowAi>
						<svelte:fragment slot="image">
							<img src={stockImg} alt="myImage" />
						</svelte:fragment>
						<svelte:fragment slot="title">1. Stocker</svelte:fragment>
						<svelte:fragment slot="link"><A href="/notebook">Object Storage -></A></svelte:fragment>
					</WorkflowAi>
					<WorkflowAi>
						<svelte:fragment slot="image">
							<img src={exploreImg} alt="myImage" />
						</svelte:fragment>
						<svelte:fragment slot="title">2. Explorer</svelte:fragment>
						<svelte:fragment slot="link"
							><A href="/project/{$page.params.projectId}/ai/notebook">AI Notebooks -></A
							></svelte:fragment
						>
						<svelte:fragment slot="badge_run">
							{#if !newProject}
								<Badge variant="success">{notebooksByStatus.running.length} en service</Badge>
							{/if}
						</svelte:fragment>
						<svelte:fragment slot="badge_stop">
							{#if !newProject}
								<Badge variant="warning">{notebooksByStatus.stopped.length} arrêté(s)</Badge>
							{/if}
						</svelte:fragment>
					</WorkflowAi>
					<WorkflowAi>
						<svelte:fragment slot="image">
							<img src={trainImg} alt="myImage" />
						</svelte:fragment>
						<svelte:fragment slot="title">3. Entraîner</svelte:fragment>
						<svelte:fragment slot="link"
							><A href="/project/{$page.params.projectId}/ai/training">AI Training -></A
							></svelte:fragment
						>
						<svelte:fragment slot="badge_run">
							{#if !newProject}
								<Badge variant="success">{jobsByStatus.running.length} en service</Badge>
							{/if}
						</svelte:fragment>
						<svelte:fragment slot="badge_stop">
							{#if !newProject}
								<Badge variant="warning">{jobsByStatus.done.length} arrêté(s)</Badge>
							{/if}
						</svelte:fragment>
					</WorkflowAi>
					<WorkflowAi>
						<svelte:fragment slot="image">
							<img src={deployImg} alt="myImage" />
						</svelte:fragment>
						<svelte:fragment slot="title">4. Déployer</svelte:fragment>
						<svelte:fragment slot="link"
							><A href="/project/{$page.params.projectId}/ai/deploy">AI Deploy -></A
							></svelte:fragment
						>
						<svelte:fragment slot="badge_run">
							{#if !newProject}
								<Badge variant="success">{appsByStatus.running.length} en service</Badge>
							{/if}
						</svelte:fragment>
						<svelte:fragment slot="badge_stop">
							{#if !newProject}
								<Badge variant="warning">{appsByStatus.stopped.length} arrêté(s)</Badge>
							{/if}
						</svelte:fragment>
					</WorkflowAi>
				</div>

				{#if newProject}
					<H2>Avantages</H2>
					<div class="grid md:grid-cols-2 grid-cols-1 gap-4">
						<AdvAi>
							<svelte:fragment slot="image">
								<img src={reversImg} alt="myImage" />
							</svelte:fragment>
							<svelte:fragment slot="title">Réversibilité</svelte:fragment>
							<svelte:fragment slot="details"
								>OVHcloud prend très au sérieux la souveraineté et la liberté des données à
								caractère personnel. Vous pouvez récupérer vos données à tout moment grâce aux
								protocoles standards.</svelte:fragment
							>
						</AdvAi>
						<AdvAi>
							<svelte:fragment slot="image">
								<img src={reversImg} alt="myImage" />
							</svelte:fragment>
							<svelte:fragment slot="title">Conformité et sécurité des données</svelte:fragment>
							<svelte:fragment slot="details"
								>En tant que fournisseur de cloud responsable de l'hébergement des données à
								caractère personnel, notre engagement implique le respect de la confidentialité de
								celles-ci.</svelte:fragment
							>
						</AdvAi>
						<AdvAi>
							<svelte:fragment slot="image">
								<img src={reversImg} alt="myImage" />
							</svelte:fragment>
							<svelte:fragment slot="title">Capacité de calcul</svelte:fragment>
							<svelte:fragment slot="details"
								>Avec des datacenters industrialisés et des déploiements automatisés, OVHcloud offre
								une grande capacité de calcul au meilleur prix pour l'analyse des données.</svelte:fragment
							>
						</AdvAi>
						<AdvAi>
							<svelte:fragment slot="image">
								<img src={reversImg} alt="myImage" />
							</svelte:fragment>
							<svelte:fragment slot="title">Conformité</svelte:fragment>
							<svelte:fragment slot="details"
								>Nos infrastructures et services cloud sont certifiés ISO/IEC 27001, 27017, 27018 et
								27701. Notre certification HDS vous permet d’héberger en toute sécurité des données
								de santé françaises.</svelte:fragment
							>
						</AdvAi>
						<AdvAi>
							<svelte:fragment slot="image">
								<img src={reversImg} alt="myImage" />
							</svelte:fragment>
							<svelte:fragment slot="title">Open source</svelte:fragment>
							<svelte:fragment slot="details"
								>Dans le monde des données, les solutions open source sont aujourd'hui les offres
								les plus abouties et les plus performantes. OVHcloud accorde de l'importance au fait
								de fonder ses solutions sur des logiciels open source, comme les suites Apache
								Hadoop et Apache Spark.</svelte:fragment
							>
						</AdvAi>
					</div>
				{/if}
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
	</TabsContent>

	<TabsContent value="user-tokens">
		<div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
			<div class="col-span-2">
				<H2>Authentification et accès sécurisé</H2>
				<P class="text-justify">La sécurité de vos données et de vos activités est primordiale. C'est la raison pour laquelle une authentification supplémentaire vous est demandée lorsque vous utilisez les AI Tools.</P>
				<H3>Gérer les accès avec les utilisateurs Public Cloud</H3>
				<P class="text-justify">Lorsque vous travaillez avec nos outils, il vous faut vous authentifier au travers d'utilisateurs communs à l'ensemble de votre projet Public Cloud.</P>
				<P class="text-justify">Les utilisateurs Public Cloud vous permettent d'accéder à vos notebooks, jobs et applications. Afin de pouvoir expérimenter en toute liberté, il vous faut choisir à minima un rôle "Admin" ou "AI".</P>
				<Button>Gérer mes utilisateurs AI</Button>
				<Button>+ Créer un utilisateurs AI</Button>
				<H2>Gérer les accès via des tokens applicatifs</H2>
				<P class="text-justify">Les tokens sont des jetons uniques d'authentification. Ils vous permettent d'accéder à vos notebooks, jobs et apps de façon granulaire, par exemple en effectuant une sélection par label.</P>
				<P class="text-justify">Les tokens sont spécifiques aux AI Tools.</P>
				<Button>+ Créer un token</Button>
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
	</TabsContent>
</Tabs>
