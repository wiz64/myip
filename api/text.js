const requestIp = require('request-ip');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send("403");
}
