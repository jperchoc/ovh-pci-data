import { browser } from '$app/environment';
import { loadTranslations, locale } from '$lib/translations/translations';
import type { ovhapi } from '$types/ovh';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url, fetch }) => {
  const { pathname } = url;
  const localStorageLanguage = browser ? localStorage.getItem('lang') : null;
  const defaultLocale = localStorageLanguage || 'fr'; // get from cookie, user session, ...
  const initLocale = locale.get() || defaultLocale; // set default if no locale already set

  const userReq = await fetch('/api/ovh/me');

  await loadTranslations(initLocale, pathname); // keep this just before the `return`

  return {
    user: userReq.ok ? await userReq.json() as ovhapi.nichandle.Nichandle : null
  };
}