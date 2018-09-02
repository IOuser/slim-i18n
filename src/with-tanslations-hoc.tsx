import React, { ComponentType } from 'react';
import { setDisplayName, wrapDisplayName } from 'recompose';

import { ITranslationsAdapter } from './itranslations-adapter';
import { TranslationsConsumer } from './translations-context';
import { defaultI18n } from './default-translations-adapter';

export type Diff<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
export type Omit<T, K> = Pick<T, keyof Diff<T, K>>;

export type WithTranslationsProps = {
    i18n: ITranslationsAdapter;
};

export function withTranslations<P extends WithTranslationsProps>(
    BaseComponent: ComponentType<P>,
): ComponentType<Omit<P, WithTranslationsProps>> {
    type Props = Omit<P, WithTranslationsProps>;

    const WithTranslations = (props: Props) => (
        <TranslationsConsumer>
            {(i18n: ITranslationsAdapter | null) => (
                <BaseComponent i18n={i18n === null ? defaultI18n : i18n} {...props} />
            )}
        </TranslationsConsumer>
    );

    if (process.env.NODE_ENV !== 'production') {
        return setDisplayName<Props>(wrapDisplayName(BaseComponent, 'withTranslations'))(WithTranslations);
    }

    return WithTranslations;
}
