import { ITranslationsAdapter } from './interfaces';
import { TranslationsProvider, TranslationsConsumer } from './translations-context';
import { Translation } from './translation';
import { withTranslations, WithTranslationsProps } from './with-tanslations-hoc';
import { defaultI18n } from './default-translations-adapter';
import SlimI18n, { TranslationsEvents, Translations } from './slim-i18n';
import { useI18n } from './use-i18n';

export {
    // i18n adapter interface
    ITranslationsAdapter,
    // react i18n context
    TranslationsProvider,
    TranslationsConsumer,
    // react i18n component
    Translation,
    // react i18n HOC
    withTranslations,
    WithTranslationsProps,
    // default i18n adapter
    defaultI18n,
    // default i18n util
    SlimI18n,
    TranslationsEvents,
    Translations,
    // react i18n hook
    useI18n,
};
