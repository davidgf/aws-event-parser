class DynamoDBStream {
  constructor(event) {
    this.event = event;
  }

  get messages() {
    return this.event.Records.map((record) => {
      return record.dynamodb;
    })
  }
}

module.exports.DynamoDBStream = DynamoDBStream;
