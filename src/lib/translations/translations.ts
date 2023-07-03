import i18n from 'sveltekit-i18n';
/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
        locale: 'en',
        key: 'common',
        loader: async () => (
            await import('./common_en.json')
        ).default,
    },
    {
        locale: 'fr',
        key: 'common',
        loader: async () => (
            await import('./common_fr.json')
        ).default,
    },
    {
      locale: 'fr',
      key: 'dataprocessing.job',
      loader: async () => (
          await import('./project/dataProcessing/job/job_fr.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'dataprocessing.job',
      loader: async () => (
          await import('./project/dataProcessing/job/job_en.json')
      ).default,
    },
    {
      locale: 'fr',
      key: 'dataprocessing.dataIntegration',
      loader: async () => (
          await import('./project/dataProcessing/dataIntegration/dataIntegration_fr.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'dataprocessing.dataIntegration',
      loader: async () => (
          await import('./project/dataProcessing/dataIntegration/dataIntegration_en.json')
      ).default,
    }
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);