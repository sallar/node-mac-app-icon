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

## API

## Functions

<dl>
<dt><a href="#getAppIconByPid">getAppIconByPid(pid, opts)</a> ⇒ <code>Promise.&lt;Buffer&gt;</code></dt>
<dd><p>Find an icon for a running application (by it&#39;s PID)</p>
</dd>
<dt><a href="#getAppIconListByPid">getAppIconListByPid(pidArray, opts)</a> ⇒ <code>Promise.&lt;Array.&lt;ListResult&gt;&gt;</code></dt>
<dd><p>Find icons for a list of running apps (by their PIDs)</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Options">Options</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ListOptions">ListOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ListResult">ListResult</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="getAppIconByPid"></a>

## getAppIconByPid(pid, opts) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Find an icon for a running application (by it's PID)

**Kind**: global function
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - Buffer containing image data

| Param | Type | Description |
| --- | --- | --- |
| pid | <code>number</code> | App PID (Process ID) |
| opts | [<code>ListOptions</code>](#ListOptions) |  |

<a name="getAppIconListByPid"></a>

## getAppIconListByPid(pidArray, opts) ⇒ <code>Promise.&lt;Array.&lt;ListResult&gt;&gt;</code>
Find icons for a list of running apps (by their PIDs)

**Kind**: global function
**Returns**: <code>Promise.&lt;Array.&lt;ListResult&gt;&gt;</code> - Buffer containing image data

| Param | Type | Description |
| --- | --- | --- |
| pidArray | <code>Array.&lt;number&gt;</code> | App PID (Process ID) |
| opts | [<code>Options</code>](#Options) |  |

<a name="Options"></a>

## Options : <code>Object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | Size of output icon (in points) |

<a name="ListOptions"></a>

## ListOptions : <code>Object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | Size of output icon (in points) |
| failOnError | <code>boolean</code> | Fail hard if a pid in the list was not found |

<a name="ListResult"></a>

## ListResult : <code>Object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pid | <code>number</code> | PID of the application |
| icon | <code>Buffer</code> | Buffer containing image data |

## License

This software is licensed under the [MIT License](LICENSE)
