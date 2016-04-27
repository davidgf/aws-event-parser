Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.parse = parse;

var _KinesisStream = require('./KinesisStream');

var _SnsEvent = require('./SnsEvent');

var _S3Event = require('./S3Event');

var _DynamoDBStream = require('./DynamoDBStream');

function parse(event) {
  if (event.Records && event.Records[0].Sns) {
    return new _SnsEvent.SnsEvent(event).messages;
  }
  if (event.Records && event.Records[0].kinesis) {
    return new _KinesisStream.KinesisStream(event).messages;
  }
  if (event.Records && event.Records[0].s3) {
    return new _S3Event.S3Event(event).message;
  }
  if (event.Records && event.Records[0].dynamodb) {
    return new _DynamoDBStream.DynamoDBStream(event).messages;
  }
  return null;
}