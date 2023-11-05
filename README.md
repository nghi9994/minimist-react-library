# Minimist React Library

<b>Table of Contents</b>

- [Minimist React Library](#minimist-react-library)
  - [Overview](#overview)
  - [Constants](#constants)
    - [EMAIL_REGEX](#email_regex)
    - [HTTP_HTTPS_REGEX](#http_https_regex)
    - [PASSWORD_REGEX](#password_regex)
    - [UUID_REGEX](#uuid_regex)
    - [VIETNAMESE_PHONE_REGEX](#vietnamese_phone_regex)
  - [Essential Packages:](#essential-packages)
    - [@chakra-ui/react](#chakra-uireact)
    - [@emotion/react](#emotionreact)
    - [@emotion/styled](#emotionstyled)
    - [@reduxjs/toolkit](#reduxjstoolkit)
    - [axios](#axios)
    - [clsx](#clsx)
    - [date-fns](#date-fns)
    - [dompurify](#dompurify)
    - [lodash](#lodash)
    - [qs](#qs)
    - [react-hook-form](#react-hook-form)
    - [react-router-dom](#react-router-dom)
    - [redux-saga](#redux-saga)
    - [yup](#yup)
  - [Utils:](#utils)
    - [Array](#array)
      - [groupListByField](#grouplistbyfield)
      - [sortList](#sortlist)
    - [fetchData](#fetchdata)
    - [lazyLoad](#lazyload)

## Overview

- This is a bundle of essential packages with custom utils that are used to build a web application
- (React + TypeScript + Vite + Storybook)
- [Typescript Playground](https://playcode.io/typescript)

## Constants

- [Regex check](https://regex101.com/)

### EMAIL_REGEX

```js
import { CONSTANTS } from "minimist-react-library";

const regex = CONSTANTS.EMAIL_REGEX;

// regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

### VIETNAMESE_PHONE_REGEX

```js
import { CONSTANTS } from "minimist-react-library";

const regex = CONSTANTS.VIETNAMESE_PHONE_REGEX;

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

### [date-fns](https://www.npmjs.com/package/date-fns)

```js
import { DateFns, DateFnsType } from "minimist-react-library";
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

## Utils:

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

### fetchData

```js
import { Utils } from "minimist-react-library";

Utils.Api.fetchData({
  requestCallback: async () => {
    return await fetch("");
  },
  successCallback: (res) => {
    console.log("@log res", res);
  },
  failureCallback: (error) => {
    console.log("@log error", error);
  },
  getLoadingState: (loadingState) => {
    console.log("@log loadingState", loadingState);
  },
  showLog: true,
});
```

### lazyLoad

```js
import { Utils } from "minimist-react-library";

const Button = Utils.lazyLoad(
  () => import("./Button"),
  (module) => module.Button
);
```
