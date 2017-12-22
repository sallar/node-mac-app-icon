# node-mac-app-icon

[![Build Status](https://travis-ci.org/sallar/node-mac-app-icon.svg?branch=master)](https://travis-ci.org/sallar/node-mac-app-icon)

Get App icons by pid on macOS in NodeJS. Returns a `base64` string representation of the App's icon.

## Install

```sh
$ npm install node-mac-app-icon --save
```

## Usage

```js
const { getAppIconByPid, getAppIconListByPid } = require('node-mac-app-icon');

getAppIconByPid(814, 32).then(res => {
  console.log(res); // base64 encoded string
});

getAppIconListByPid([814, 20134, 503]).then(res => {
  console.log(res); // array of { pid: ..., icon: ... }
});
```

## License

This software is licensed under the [MIT License](LICENSE)
