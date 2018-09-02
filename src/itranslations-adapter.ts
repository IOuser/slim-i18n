export interface ITranslationsAdapter {
    readonly language?: string;
    gettext(key: string): string;
    // TODO: Add support for plural strings and context
    // ngettext(singularKey: string, pluralKey: string, count: number): string;
    // pgettext(context: string, key: string): string;
    // npgettext(context: string, singularKey: string, pluralKey: string, count: number): string;
}
