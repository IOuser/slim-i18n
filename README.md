# Slim React i18n
Slim i18n library wrapper for React with React.Context syntax.


## Install

```bash
npm install slim-i18n
// or
yarn add slim-i18n

```

## Example

```jsx harmony
// In index.jsx

import { TranslationsProvider } from 'slim-i18n';
import getTranslationAdapter from './get-translation-adapter';
import MyApp from './app';

const i18n = getTranslationAdapter();

ReactDOM.render(
    <TranslationsProvider value={i18n}>
        <MyApp />
    </TranslationsProvider>,
    document.getElementById('my-app')
);
```


```jsx harmony
// In app.jsx

import { useI18n } from 'slim-i18n';

export default function app() {
    const i18n = useI18n();
    
    return (
        <div>{i18n.gettext('Hello World! I can be multi language!')}</div>
    );
}
```
