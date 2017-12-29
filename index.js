const path = require('path');
const execa = require('execa');

const execPath = path.resolve(__dirname, './run');

function getOptions(opts) {
  return Object.assign(
    {},
    {
      size: 32
    },
    opts
  );
}

function getAppIconByPid(pid, opts) {
  opts = getOptions(opts);
  return Promise.resolve().then(() => {
    return execa.stdout(execPath, [pid, '--size', opts.size]/* , {
      encoding: 'buffer'
    } */);
  });
}

function getAppIconListByPid(pidArray, opts) {
  return Promise.all(pidArray.map(pid => getAppIconByPid(pid, opts))).then(
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
