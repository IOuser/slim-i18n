import { ITranslationsAdapter } from './interfaces';
const ident = (value: string) => value;

export const defaultI18n: ITranslationsAdapter = {
    gettext: ident,
    pgettext: ident,
    ngettext: ident,
    npgettext: ident,
};
