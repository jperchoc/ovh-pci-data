<script lang="ts">
	import { locale } from '$lib/translations/translations';

	function changeLanguage(lang: string) {
		localStorage.setItem('lang', lang);
		locale.set(lang);
	}
</script>

<button on:click={() => changeLanguage('en')}>EN</button>
<button on:click={() => changeLanguage('fr')}>FR</button>
<slot />