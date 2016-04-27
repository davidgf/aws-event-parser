'use strict';

class SnsEvent {
  constructor(event) {
    this.event = event;
  }

  get messages() {
    return this.event.Records.map((record) => {
      return JSON.parse(record.Sns.Message);
    })
  }
}

module.exports.SnsEvent = SnsEvent;
