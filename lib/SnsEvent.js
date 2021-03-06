'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SnsEvent = (function () {
  function SnsEvent(event) {
    _classCallCheck(this, SnsEvent);

    this.event = event;
  }

  _createClass(SnsEvent, [{
    key: 'messages',
    get: function get() {
      return this.event.Records.map(function (record) {
        return JSON.parse(record.Sns.Message);
      });
    }
  }]);

  return SnsEvent;
})();

module.exports.SnsEvent = SnsEvent;