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
    - [clsx](#clsx)
    - [dompurify](#dompurify)
    - [lodash](#lodash)
    - [qs](#qs)
    - [react-hook-form](#react-hook-form)
    - [react-router-dom](#react-router-dom)
    - [yup](#yup)
  - [Hooks](#hooks)
    - [Data](#data)
      - [useArray](#usearray)
      - [useToggle](#usetoggle)
    - [Device](#device)
      - [useDeviceDetect](#usedevicedetect)
      - [useEventListener](#useeventlistener)
      - [useResponsive (depreciated)](#useresponsive-depreciated)
      - [useScroll](#usescroll)
      - [useWindowSize](#usewindowsize)
    - [Dom](#dom)
      - [useOnScreen](#useonscreen)
    - [Storage](#storage)
      - [useLocalStorage, useSessionStorage](#uselocalstorage-usesessionstorage)
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

Some extra essential packages:

```bash
npm i axios
npm i date-fns
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm i @reduxjs/toolkit redux-saga
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

### [yup](https://www.npmjs.com/package/yup)

```js
import { Yup, YupType } from "minimist-react-library";
```

## Hooks

### Data

#### useArray

```js
import { Hooks } from "minimist-react-library";

const { array, set, push, remove, filter, update, clear } = Hooks.Data.useArray(
  [1, 2, 3, 4, 5, 6]
);
```

#### useToggle

```js
import { Hooks } from "minimist-react-library";

const [value, toggleValue] = Hooks.Data.useToggle(false);

return (
  <>
    <button onClick={toggleValue}>Toggle</button>
    <button onClick={() => toggleValue(true)}>Make True</button>
    <button onClick={() => toggleValue(false)}>Make False</button>
  </>
);
```

### Device

#### useDeviceDetect

```js
import { Hooks } from "minimist-react-library";

const { isMobile } = Hooks.Device.useDeviceDetect();
```

#### useEventListener

```js
import { Hooks } from "minimist-react-library";

Hooks.Device.useEventListener("scroll", callback);
```

#### useResponsive (depreciated)

#### useScroll

```js
import { Hooks } from "minimist-react-library";

const isScrolling = Hooks.Device.useScroll();
```

#### useWindowSize

```js
import { Hooks } from "minimist-react-library";

const { width, height } = Hooks.Device.useWindowSize();
```

### Dom

#### useOnScreen

```js
import { Hooks } from "minimist-react-library";

const buttonRef = useRef();
const isVisible = Hooks.Dom.useOnScreen(buttonRef);
```

### Storage

#### useLocalStorage, useSessionStorage

```js
import { Hooks } from "minimist-react-library";

const [name, setName, removeName] = Hooks.Storage.useSessionStorage(
  "name",
  "Happy"
);
const [age, setAge, removeAge] = Hooks.Storage.useLocalStorage("age", 26);
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
