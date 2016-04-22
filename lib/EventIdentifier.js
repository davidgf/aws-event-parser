export function parse(event){
  switch (event) {
    case (event.match(/Sns/) || {}).input:

    return event;
    case (event.match(/kinesis/) || {}).input:

    return event;
    case (event.match(/s3/) || {}).input:

    return event;
    case (event.match(/dynamodb/) || {}).input:

    return event;
    default:
      console.log("Event is not supported");
      return null;
  }
}
