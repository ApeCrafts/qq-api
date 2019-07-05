'use strict';

var API = require('./lib/api_common');
// 接口调用频次限制
API.mixin(require('./lib/api_quota'));

module.exports = API;
