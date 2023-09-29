<script lang="ts">
    import { A, H1, P, H2, H3, H4, Code } from '$components/ui/typography';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '$components/ui/tabs';
	import { string } from 'zod';
	import { goto } from '$app/navigation';
    import { page } from "$app/stores";
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
    <div class="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground my-3">
        <a href="./home" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow" data-state="active">Tableau de bord</a>
        <a href="./users-tokens" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow">Utilisateurs & Tokens</a>
        <a href="./registries" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow">Registries</a>
        <a href="./cli" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow">Command Line Interface</a>
    </div>
    <H2 />
</div>
<slot />
