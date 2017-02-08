'use strict';

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = new _User2.default('John');
user.doSomething().then(function (value) {
    console.log(value);
});
//# sourceMappingURL=app.js.map