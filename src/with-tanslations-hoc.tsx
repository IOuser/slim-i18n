import React, { ComponentType } from 'react';
import { setDisplayName, wrapDisplayName } from 'recompose';
import { ITranslationsAdapter } from './interfaces';
import { TranslationsConsumer } from './translations-context';


type Diff<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
type Omit<T, K> = Pick<T, keyof Diff<T, K>>;

export type WithTranslationsProps = {
    i18n: ITranslationsAdapter;
};

export function withTranslations<P extends WithTranslationsProps>(
    BaseComponent: ComponentType<P>,
): ComponentType<Omit<P, WithTranslationsProps>> {
    type ResultProps = Omit<P, WithTranslationsProps>;

    const WithTranslations: ComponentType<ResultProps> = (props: ResultProps) => (
        <TranslationsConsumer>
            {(i18n: ITranslationsAdapter) => (
                // https://github.com/Microsoft/TypeScript/issues/28821
                <BaseComponent i18n={i18n} {...props as P} />
            )}
        </TranslationsConsumer>
    );

    if (process.env.NODE_ENV !== 'production') {
        return setDisplayName<ResultProps>(
            wrapDisplayName(BaseComponent, 'withTranslations'),
        )(WithTranslations);
    }

    return WithTranslations;
}
