'use strict';

const greet = module.exports = function() {
  let name = process.argv[2] || 'Mars'
  return 'Hello ' + name;
};

console.log(greet());
