import i18n from 'sveltekit-i18n';
console.log('hello from translations')
/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
        locale: 'en',
        key: 'common',
        loader: async () => (
            await import('./en/common.json')
        ).default,
    },
    {
        locale: 'fr',
        key: 'common',
        loader: async () => (
            await import('./fr/common.json')
        ).default,
    },
    {
      locale: 'fr',
      key: 'dataprocessing.job',
      loader: async () => (
          await import('./fr/pages/project/dataProcessing/job/job.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'dataprocessing.job',
      loader: async () => (
          await import('./en/pages/project/dataProcessing/job/job.json')
      ).default,
    },
    {
      locale: 'fr',
      key: 'dataintegration.workflow',
      loader: async () => (
          await import('./fr/pages/project/dataIntegration/workflow/workflow.json')
      ).default,
    },    {
      locale: 'en',
      key: 'dataintegration.workflow',
      loader: async () => (
          await import('./en/pages/project/dataIntegration/workflow/workflow.json')
      ).default,
    }
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);