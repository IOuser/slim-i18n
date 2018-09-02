import { ITranslationsAdapter } from './itranslations-adapter';

const ident = (value: string) => value;

export const defaultI18n: ITranslationsAdapter = {
    gettext: ident,
};
