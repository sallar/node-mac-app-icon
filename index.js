const path = require('path');
const execa = require('execa');
const electronUtil = require('electron-util/node');

// Workaround for https://github.com/electron/electron/issues/9459
const execPath = path.join(electronUtil.fixPathForAsarUnpack(__dirname), 'run');

/**
 * @typedef {Object} Options
 * @property {number} size Size of output icon (in points)
 */

/**
 * @typedef {Object} ListOptions
 * @property {number} size Size of output icon (in points)
 * @property {boolean} failOnError Fail hard if a pid in the list was not found
 */

/**
 * @typedef {Object} ListResult
 * @property {number} pid PID of the application
 * @property {Buffer} icon Buffer containing image data
 */

function getOptions(opts) {
  return Object.assign(
    {},
    {
      size: 32,
      failOnError: true
    },
    opts
  );
}

/**
 * Find an icon for a running application (by it's PID)
 * @param {number} pid App PID (Process ID)
 * @param {ListOptions} opts
 * @returns {Promise<Buffer>} Buffer containing image data
 */
function getAppIconByPid(pid, opts) {
  opts = getOptions(opts);
  return execa.stdout(
    execPath,
    [pid, '--size', opts.size, '--encoding', 'buffer'],
    {
      encoding: 'buffer'
    }
  );
}

/**
 * Find icons for a list of running apps (by their PIDs)
 * @param {number[]} pidArray App PID (Process ID)
 * @param {Options} opts
 * @returns {Promise<ListResult[]>} Buffer containing image data
 */
function getAppIconListByPid(pidArray, opts) {
  opts = getOptions(opts);
  return Promise.all(
    pidArray.map(pid => getAppIconByPid(pid, opts).catch(err => {
      if (opts.failOnError === true) {
        return Promise.reject(err);
      }
      return null;
    }))
  ).then(
    result =>
      result.map((icon, i) => ({
        pid: pidArray[i],
        icon
      }))
  );
}

module.exports = {
  getAppIconByPid,
  getAppIconListByPid
};
