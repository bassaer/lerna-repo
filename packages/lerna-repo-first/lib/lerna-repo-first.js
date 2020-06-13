'use strict';

module.exports = describe;

const second = require('lerna-repo-second');
const third = require('lerna-repo-third');

function describe() {
    console.log("this is the first repo");
    console.log(second());
    console.log(third());
}

describe();
