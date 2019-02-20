import { useContext } from 'react';
import { ITranslationsAdapter } from './interfaces';
import TranslationsContext from './translations-context';

export function useI18n(): ITranslationsAdapter {
    return useContext(TranslationsContext);
}
