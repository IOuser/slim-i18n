import React from 'react';

import { ITranslationsAdapter } from './itranslations-adapter';

export const {
    Provider: TranslationsProvider,
    Consumer: TranslationsConsumer,
} = React.createContext<ITranslationsAdapter | null>(null);
