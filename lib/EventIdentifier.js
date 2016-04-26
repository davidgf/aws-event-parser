import { KinesisStream } from './KinesisStream';
import { SnsEvent } from './SnsEvent';

export function parse(event){
  if(event.Records && event.Records[0].Sns){
    return new SnsEvent(event).messages;
  }
  if(event.Records && event.Records[0].kinesis){
    return new KinesisStream(event).messages;
  }
  if(event.Records && event.Records[0].s3){

  }
  if(event.Records && event.Records[0].dynamodb){

  }
  return null;
}
