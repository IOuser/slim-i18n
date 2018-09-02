import React, { ReactNode } from 'react';

import { ITranslationsAdapter } from './itranslations-adapter';
import { TranslationsConsumer } from './translations-context';
import { defaultI18n } from './default-translations-adapter';

export type TranslationRenderProp = (i18n: ITranslationsAdapter) => ReactNode;
export type TranslationProps = {
    children: TranslationRenderProp;
};

export const Translation = ({ children }: TranslationProps) => (
    <TranslationsConsumer>
        {(i18n: ITranslationsAdapter | null) => children(i18n === null ? defaultI18n : i18n)}
    </TranslationsConsumer>
);
