# Minimist React Library

🚀 Newer version [react-minimist-utils](https://www.npmjs.com/package/react-minimist-utils)

A bundle of essential packages with custom utils to build a web application

`React + TypeScript + Vite + Storybook`

[Typescript Playground](https://playcode.io/typescript)

[Regex Playground](https://regex101.com/)

[Lorem](https://loremipsum.io/)

[Free Test Data](https://freetestdata.com/)

---

<b>Table of Contents</b>

- [Minimist React Library](#minimist-react-library)
  - [Installation](#installation)
  - [Constants](#constants)
    - [EMAIL_REGEX](#email_regex)
    - [HEX_COLOR_REGEX](#hex_color_regex)
    - [HTTP_HTTPS_REGEX](#http_https_regex)
    - [PASSWORD_REGEX](#password_regex)
    - [UUID_REGEX](#uuid_regex)
    - [VIETNAMESE_PHONE_NUMBER_REGEX](#vietnamese_phone_number_regex)
  - [Essential Packages:](#essential-packages)
    - [clsx](#clsx)
    - [dompurify](#dompurify)
    - [lodash](#lodash)
    - [qs](#qs)
    - [react-hook-form](#react-hook-form)
    - [react-router-dom](#react-router-dom)
    - [yup](#yup)
  - [Hooks](#hooks)
    - [Array](#array)
      - [useArray](#usearray)
    - [Data](#data)
      - [useToggle](#usetoggle)
    - [Device](#device)
      - [useDeviceDetect](#usedevicedetect)
      - [useResponsive (depreciated)](#useresponsive-depreciated)
    - [Dom](#dom)
      - [useElementOnScreen](#useelementonscreen)
      - [useEventListener](#useeventlistener)
    - [Storage](#storage)
      - [useLocalStorage, useSessionStorage](#uselocalstorage-usesessionstorage)
    - [Window](#window)
      - [useScrolling](#usescrolling)
      - [useScrollTo](#usescrollto)
      - [useWindowSize](#usewindowsize)
  - [Utils:](#utils)
    - [Api](#api)
      - [fetchData](#fetchdata)
    - [Array](#array-1)
      - [groupListByField](#grouplistbyfield)
      - [sortList](#sortlist)
    - [Data](#data-1)
      - [downloadFile](#downloadfile)
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

### Array

#### useArray

```js
import { Hooks } from "minimist-react-library";

const { array, set, push, remove, filter, update, clear } =
  Hooks.Array.useArray([1, 2, 3, 4, 5, 6]);
```

### Data

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

#### useResponsive (depreciated)

### Dom

#### useElementOnScreen

```js
import { Hooks } from "minimist-react-library";

const buttonRef = useRef();
const isVisible = Hooks.Dom.useElementOnScreen(buttonRef);
```

#### useEventListener

```js
import { Hooks } from "minimist-react-library";

Hooks.Dom.useEventListener("scroll", callback);
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

### Window

#### useScrolling

```js
import { Hooks } from "minimist-react-library";

const isScrolling = Hooks.Window.useScrolling();
```

#### useScrollTo

```js
import { Hooks } from "minimist-react-library";

const buttonRef = useRef();
const { scrollToElement, scrollTo } = Hooks.Window.useScrollTo();

scrollToElement(buttonRef);

// Default is scroll to top
scrollTo();
```

#### useWindowSize

```js
import { Hooks } from "minimist-react-library";

const { width, height } = Hooks.Window.useWindowSize();
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

### Data

#### downloadFile

```js
import { Utils } from "minimist-react-library";

const { downloadFile, DOWNLOAD_LINK_SAMPLE } = Utils.Data;
downloadFile(DOWNLOAD_LINK_SAMPLE);

// 55,250.20
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
