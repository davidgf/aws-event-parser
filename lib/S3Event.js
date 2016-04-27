'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var S3Event = (function () {
  function S3Event(event) {
    _classCallCheck(this, S3Event);

    this.event = event;
  }

  _createClass(S3Event, [{
    key: 'message',
    get: function get() {
      return this.event.Records[0].s3;
    }
  }]);

  return S3Event;
})();

module.exports.S3Event = S3Event;