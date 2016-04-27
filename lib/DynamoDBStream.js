var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DynamoDBStream = (function () {
  function DynamoDBStream(event) {
    _classCallCheck(this, DynamoDBStream);

    this.event = event;
  }

  _createClass(DynamoDBStream, [{
    key: "messages",
    get: function get() {
      return this.event.Records.map(function (record) {
        return record.dynamodb;
      });
    }
  }]);

  return DynamoDBStream;
})();

module.exports.DynamoDBStream = DynamoDBStream;