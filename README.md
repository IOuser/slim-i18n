# Slim React i18n
Slim wrapper for i18n in React with flexible utils which can be used with any i18n library.

## Install
```bash
npm install slim-i18n
// or
yarn add slim-i18n

```

## Usage

```jsx harmony
// init
import { TranslationsProvider } from 'slim-i18n';
import getTranslationAdapter from './get-translation-adapter';
import App from './app';

const i18n = getTranslationAdapter();

ReactDOM.render(
    <TranslationsProvider value={i18n}>
        <App />
    </TranslationsProvider>,
    document.getElementById('my-app')
);
```

```jsx harmony
// with hook
import { useI18n } from 'slim-i18n';

export default function App() {
    const i18n = useI18n();

    return (
        <div>{i18n.gettext('Hello World! I can be multi language!')}</div>
    );
}
```

```jsx harmony
// with HOC
import { withTranslations } from 'slim-i18n';

export default withTranslations(({ i18n }) => (
    <div>{i18n.gettext('Hello World! I can be multi language!')}</div>
));
```

```jsx harmony
// with Translation component
import { Translation } from 'slim-i18n';

export default function App() {
    return (
        <Translation>
            {({ i18n }) => (
                <div>{i18n.gettext('Hello World! I can be multi language!')}</div>
            )}
        </Translation>
    );
}
```