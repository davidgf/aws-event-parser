import { KinesisStream } from './KinesisStream';
import { SnsEvent } from './SnsEvent';
import { S3Event } from './S3Event';
import { DynamoDBStream } from './DynamoDBStream';

export function parse(event){
  if(event.Records && event.Records[0].Sns){
    return new SnsEvent(event).messages;
  }
  if(event.Records && event.Records[0].kinesis){
    return new KinesisStream(event).messages;
  }
  if(event.Records && event.Records[0].s3){
    return new S3Event(event).message;
  }
  if(event.Records && event.Records[0].dynamodb){
    return new DynamoDBStream(event).messages;
  }
  return null;
}
