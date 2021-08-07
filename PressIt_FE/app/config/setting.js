export const BaseSetting = {
    name: 'PressIt_FE',
    displayName: 'PressIt',
    appVersion: '0.0.0',
    defaultLanguage: 'en',
    languageSupport: [
        'en',
        'vi',
    ],
    resourcesLanguage: {
        en: {
            translation: require('../lang/en.json'),
        },
        vi: {
            translation: require('../lang/vi.json'),
        },
    },
};