const { getAppIconByPid, getAppIconListByPid } = require('./');

getAppIconByPid(814, 10).then(
  res => console.log(res),
  err => console.error(err)
);

getAppIconListByPid([814]).then(res => console.log(res));
