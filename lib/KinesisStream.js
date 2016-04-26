'use strict';

class KinesisStream {
  constructor(event) {
    this.event = event;
  }

  get messages() {
    return this.event.Records.map((record) => {
      const data = new Buffer(record.kinesis.data, 'base64').toString();
      return JSON.parse(data);
    })
  }
}

module.exports.KinesisStream = KinesisStream;
