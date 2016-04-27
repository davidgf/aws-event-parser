'use strict';

import * as chai from 'chai';
import { expect } from 'chai';
import { DynamoDBStream } from '../lib/DynamoDBStream';
import * as event from './fixtures/dynamodb.json';

describe('DynamoDBStream', () => {

  let dynamoDBStream;

  context('when a correct DynamoDB Stream event was provided', () => {
    before(() => {
      dynamoDBStream = new DynamoDBStream(event);
    })
    describe('#messages()', () => {
      it('returns an array of objects', (done) => {
        const messages = dynamoDBStream.messages
        expect(messages).to.be.an('array');
        for(let message of messages) {
          expect(message).to.be.an('object');
        }
        done();
      });
    });
  });
});
