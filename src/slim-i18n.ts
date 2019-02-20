import './utils/string-format';
import { IDestroyable, ISubscription, AnyFunction } from './interfaces';

export enum TranslationsEvents {
    LanguageChanged = 'languageChanged',
    TranslationsChanged = 'translationsChanged',
}

export type Translations = Record<string, string>;

export default class SlimI18n implements IDestroyable, ISubscription<TranslationsEvents> {
    private _language: string = 'en-us';
    private _handlersMap: Map<TranslationsEvents, Set<AnyFunction>> = new Map();
    private _translationsMap: Map<string, Translations> = new Map();

    public destroy(): void {
        this._handlersMap.clear();
    }

    public subscribe(key: TranslationsEvents, handler: AnyFunction): void {
        const handlersMap = this._handlersMap;
        const set = handlersMap.get(key);
        if (set !== undefined) {
            set.add(handler);
            return;
        }

        handlersMap.set(key, new Set([handler]));
    }

    public unsubscribe(key: TranslationsEvents, handler: AnyFunction): void {
        const set = this._handlersMap.get(key);
        if (set === undefined) {
            return;
        }

        set.delete(handler);
    }

    public setLanguage(language: string): void {
        this._language = language;
        this._dispatchEvent(TranslationsEvents.LanguageChanged, language);
    }

    public getLanguage(): string {
        return this._language;
    }

    public setTranslations(language: string, translations: Translations): void {
        this._translationsMap.set(language, translations);
        this._dispatchEvent(TranslationsEvents.TranslationsChanged, language);
    }

    public translate(key: string): string {
        const translations = this._translationsMap.get(this._language);
        if (translations === undefined) {
            return key;
        }

        const translation = translations[key];
        if (translation === undefined) {
            return key;
        }

        return translation;
    }

    private _dispatchEvent(key: TranslationsEvents, payload: any): void {
        const set = this._handlersMap.get(key);
        if (set === undefined) {
            return;
        }

        for (const handler of set) {
            handler(payload);
        }
    }
}
