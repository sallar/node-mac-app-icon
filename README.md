# node-mac-app-icon

[![Build Status](https://travis-ci.org/sallar/node-mac-app-icon.svg?branch=master)](https://travis-ci.org/sallar/node-mac-app-icon)

Get App icons by pid on macOS in NodeJS. Returns a `Buffer` representation of the App's icon data.

The node source uses a [Swift](https://github.com/sallar/GetAppIcon) binary to fetch the icons so it's pretty fast.

Returning a `Buffer` is inspired by [sindresorhus/file-icon](https://github.com/sindresorhus/file-icon).

## Install

```sh
$ npm install node-mac-app-icon --save
```

## Usage

```js
const { getAppIconByPid, getAppIconListByPid } = require('node-mac-app-icon');

getAppIconByPid(814, { size: 32 }).then(res => {
  console.log(res); // res is a Buffer
});

getAppIconListByPid([814, 20134, 503], { size: 512 }).then(res => {
  console.log(res); // array of { pid: ..., icon: ... }
});
```

## License

This software is licensed under the [MIT License](LICENSE)
