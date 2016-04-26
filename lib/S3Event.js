'use strict';

class S3Event {
  constructor(event) {
    this.event = event;
  }

  get message() {
    return this.event.Records[0].s3;
  }
}

module.exports.S3Event = S3Event;
