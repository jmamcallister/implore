module.exports = Implore;

function Implore() {
  if (!(this instanceof Implore)) {
    return new Implore();
  }
}

const supportedMethods = ['DELETE', 'HEAD', 'GET', 'OPTIONS', 'PATCH', 'POST', 'PUT'];

supportedMethods.forEach((method) => {
  Implore.prototype[method.trim().toLowerCase()] = function (url) {
    this._url = url;
    this._protocol = getProtocolFromUrl(url);
    this._method = method;
    console.log(`_method: ${this._method}`);

    return this;
  };
});

Implore.prototype.send = function () {
  return new Promise((resolve, reject) => {
    resolve('yo');
  });
};

const getProtocolFromUrl = (url) => {
  return url.startsWith('https://') ? 'https' : 'http';
};
