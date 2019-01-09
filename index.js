const TEST = 1234;
const sayHello = () => {
  console.log('Hello World!');
};

module.exports = {
  test: TEST,
  sayHello,
};

module.exports.default = module.exports;
