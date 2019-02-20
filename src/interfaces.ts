export type AnyFunction = (...args: any[]) => void;

export interface IDestroyable {
    destroy(): void;
}

export interface ISubscription<T> {
    subscribe(key: T, handler: AnyFunction): void;

    unsubscribe(key: T, handler: AnyFunction): void;
}

export interface ITranslationsAdapter {
    readonly languageCode?: string;
    readonly language?: string;

    gettext(key: string): string;

    ngettext(singularKey: string, pluralKey: string, count: number): string;

    pgettext(context: string, key: string): string;

    npgettext(context: string, singularKey: string, pluralKey: string, count: number): string;
}
