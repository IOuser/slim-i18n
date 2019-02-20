import React from 'react';
import { ITranslationsAdapter } from './interfaces';
import { defaultI18n } from './default-translations-adapter';

const TranslationsContext = React.createContext<ITranslationsAdapter>(defaultI18n);

export default TranslationsContext;
export const { Provider: TranslationsProvider, Consumer: TranslationsConsumer } = TranslationsContext;
