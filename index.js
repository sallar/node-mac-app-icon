const path = require('path');
const child = require('child_process');

const execPath = path.resolve(__dirname, 'dist/GetAppIcon');

function getAppIconByPid(pid, size = 32) {
  return new Promise((resolve, reject) => {
    child.execFile(execPath, [pid, '--size', size], (err, stdout) => {
      if (err) {
        return reject(err);
      }
      return resolve(stdout);
    });
  });
}

function getAppIconListByPid(pidArray, size) {
  return Promise.all(pidArray.map(pid => getAppIconByPid(pid, size))).then(
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
