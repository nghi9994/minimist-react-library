# Minimist React Library

- A bundle of essential packages with custom utils to build a web application
- React + TypeScript + Vite + Storybook
- [Typescript Playground](https://playcode.io/typescript)
- [Regex Playground](https://regex101.com/)
- [Lorem](https://loremipsum.io/)

---

<b>Table of Contents</b>

- [Minimist React Library](#minimist-react-library)
  - [Installation](#installation)
  - [Constants](#constants)
    - [EMAIL\_REGEX](#email_regex)
    - [HEX\_COLOR\_REGEX](#hex_color_regex)
    - [HTTP\_HTTPS\_REGEX](#http_https_regex)
    - [PASSWORD\_REGEX](#password_regex)
    - [UUID\_REGEX](#uuid_regex)
    - [VIETNAMESE\_PHONE\_NUMBER\_REGEX](#vietnamese_phone_number_regex)
  - [Essential Packages:](#essential-packages)
    - [@chakra-ui/react](#chakra-uireact)
    - [@emotion/react](#emotionreact)
    - [@emotion/styled](#emotionstyled)
    - [@reduxjs/toolkit](#reduxjstoolkit)
    - [axios](#axios)
    - [clsx](#clsx)
    - [dompurify](#dompurify)
    - [lodash](#lodash)
    - [qs](#qs)
    - [react-hook-form](#react-hook-form)
    - [react-router-dom](#react-router-dom)
    - [redux-saga](#redux-saga)
    - [yup](#yup)
  - [Hooks](#hooks)
    - [Device](#device)
      - [useResponsive](#useresponsive)
  - [Utils:](#utils)
    - [Api](#api)
      - [fetchData](#fetchdata)
    - [Array](#array)
      - [groupListByField](#grouplistbyfield)
      - [sortList](#sortlist)
    - [Number](#number)
      - [numberWithComma](#numberwithcomma)
    - [React](#react)
      - [lazyLoad](#lazyload)
    - [String](#string)
      - [checkWordCount](#checkwordcount)
      - [convertHexToRgb](#converthextorgb)
      - [convertStyleObjectToString](#convertstyleobjecttostring)
      - [sanitizeHTML](#sanitizehtml)
      - [trimText](#trimtext)

## Installation

```bash
npm i minimist-react-library
```

Some extra essential packages

```bash
npm i date-fns framer-motion
```

## Constants

### EMAIL_REGEX

```js
import { CONSTANTS } from "minimist-react-library";

const regex = CONSTANTS.EMAIL_REGEX;

// regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
```

### HEX_COLOR_REGEX

```js
import { CONSTANTS } from "minimist-react-library";

const regex = CONSTANTS.HEX_COLOR_REGEX;

// regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
```

### HTTP_HTTPS_REGEX

```js
import { CONSTANTS } from "minimist-react-library";

const regex = CONSTANTS.HTTP_HTTPS_REGEX;

// regex = /http(s?):\/\//gm
```

### PASSWORD_REGEX

```js
import { CONSTANTS } from "minimist-react-library";

const regex = CONSTANTS.PASSWORD_REGEX;

// regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/g;
```

### UUID_REGEX

```js
import { CONSTANTS } from "minimist-react-library";

const regex = CONSTANTS.UUID_REGEX;

// regex = /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/g;
```

### VIETNAMESE_PHONE_NUMBER_REGEX

```js
import { CONSTANTS } from "minimist-react-library";

const regex = CONSTANTS.VIETNAMESE_PHONE_NUMBER_REGEX;

// regex = /^(\+?)(0|84?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/gm;
```

## Essential Packages:

### [@chakra-ui/react](https://www.npmjs.com/package/@chakra-ui/react)

```js
import {
  ChakraProvider,
  ChakraType,
  Container,
  Text,
} from "minimist-react-library";
```

### [@emotion/react](https://www.npmjs.com/package/@emotion/react)

```js
import { EmotionReact, EmotionReactType } from "minimist-react-library";
```

### [@emotion/styled](https://www.npmjs.com/package/@emotion/styled)

```js
import {
  EmotionStyled,
  EmotionStyledType,
  styled,
} from "minimist-react-library";
```

### [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)

```js
import { ReduxToolkit, ReduxToolkitType } from "minimist-react-library";
```

### [axios](https://www.npmjs.com/package/axios)

```js
import { axios, Axios, AxiosType } from "minimist-react-library";
```

### [clsx](https://www.npmjs.com/package/clsx)

```js
import { Clsx, ClsxType } from "minimist-react-library";
```

### [dompurify](https://www.npmjs.com/package/dompurify)

```js
import { dompurify, DOMPurify, DompurifyType } from "minimist-react-library";
```

### [lodash](https://www.npmjs.com/package/lodash)

```js
import { _, Lodash, LodashType } from "minimist-react-library";
```

### [qs](https://www.npmjs.com/package/qs)

```js
import { qs, qsType } from "minimist-react-library";
```

### [react-hook-form](https://www.npmjs.com/package/react-hook-form)

```js
import { ReactHookForm, ReactHookFormType } from "minimist-react-library";
```

### [react-router-dom](https://www.npmjs.com/package/react-router-dom)

```js
import { ReactRouter, ReactRouterType } from "minimist-react-library";
```

### [redux-saga](https://www.npmjs.com/package/redux-saga)

```js
import { ReduxSaga, ReduxSagaType } from "minimist-react-library";
```

### [yup](https://www.npmjs.com/package/yup)

```js
import { Yup, YupType } from "minimist-react-library";
```

## Hooks

### Device

#### useResponsive

```js
import { Hooks } from "minimist-react-library";

const isMobile = Hooks.Device.useResponsive(769);
const isTablet = Hooks.Device.useResponsive(1024);
```

## Utils:

### Api

#### fetchData

```js
import { Utils } from "minimist-react-library";

Utils.Api.fetchData({
  requestCallback: async () => {
    return await fetch("");
  },
  successCallback: (res) => {
    // Handle if call api successfully
  },
  failureCallback: (error) => {
    // Handle if call api failed
  },
  getLoadingState: (isLoading) => {
    if (isLoading) {
      // Toggle on loading component
    } else {
      // Toggle off loading component
    }
  },
  showLog: true,
});
```

### Array

- [Generate data tool](https://generatedata.com/)

#### groupListByField

```js
import { Utils } from "minimist-react-library";

const list = Utils.Array.groupListByField({
  list: mockList,
  field: "name",
});
```

#### sortList

- By default, sortType is "asc"

```js
import { Utils } from "minimist-react-library";

const data = Utils.Array.sortList({
  list: mockList,
  field: "name",
  sortType: "desc",
});
```

### Number

#### numberWithComma

```js
import { Utils } from "minimist-react-library";

const formattedNumber = Utils.Number.numberWithComma(55250.2);

// 55,250.20
```

### React

#### lazyLoad

```js
import { Utils } from "minimist-react-library";

const Button = Utils.lazyLoad(
  () => import("./Button"),
  (module) => module.Button
);
```

### String

#### checkWordCount

```js
import { Utils } from "minimist-react-library";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const isTextValid = Utils.String.checkWordCount(text, 5, 30);

// {isValid: true, maxWordRequired: 30, minWordRequired: 5, wordCount: 8}
```

#### convertHexToRgb

```js
import { Utils } from "minimist-react-library";

const formattedNumber = Utils.String.numberWithComma(55250.2);

// 55,250.20
```

#### convertStyleObjectToString

```js
import { Utils } from "minimist-react-library";

const styleObject = {
  color: "#000",
  fontSize: "20px",
};
const cssString = Utils.String.convertStyleObjectToString(styleObject);

// color:#000;font-size:20px;
```

#### sanitizeHTML

```js
import { Utils } from "minimist-react-library";

const dirtyHTML = <p>This is dirty HTML</p>;
const htmlText = Utils.String.sanitizeHTML(dirtyHTML);

// <p>This is dirty HTML</p>
```

#### trimText

```js
import { Utils } from "minimist-react-library";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const newText = Utils.String.trimText(text, 50);

// {textLength: 56, textLengthRequired: 50, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ...'}
```
