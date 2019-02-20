import { ITranslationsAdapter, AnyFunction, IDestroyable, ISubscription } from './interfaces';
import { TranslationsProvider, TranslationsConsumer } from './translations-context';
import { Translation, TranslationRenderProp } from './translation';
import { withTranslations, WithTranslationsProps } from './with-tanslations-hoc';
import { defaultI18n } from './default-translations-adapter';
import SlimI18n, { TranslationsEvents, Translations } from './slim-i18n';
import { useI18n } from './use-i18n';

export {
    ITranslationsAdapter,
    AnyFunction,
    IDestroyable,
    ISubscription,

    TranslationsProvider,
    TranslationsConsumer,

    Translation,
    TranslationRenderProp,

    withTranslations,
    WithTranslationsProps,

    defaultI18n,

    SlimI18n,
    TranslationsEvents,
    Translations,

    useI18n,
};
