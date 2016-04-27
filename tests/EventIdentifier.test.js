'use strict';

import * as chai from 'chai';
import { expect } from 'chai';
import { parse } from '../lib/EventIdentifier';
import * as kinesisEvent from './fixtures/kinesis.json';
import * as snsEvent from './fixtures/sns.json';
import * as s3Event from './fixtures/s3.json';
import * as dynamodbEvent from './fixtures/dynamodb.json';

describe('EventIdentifier', () => {

  context('when correct events were provided', () => {

    describe('#parse() Kinesis event', () => {
      it('returns an array of kinesis objects', (done) => {
        const messages = parse(kinesisEvent);
        expect(messages).to.be.an('array');
        for(let message of messages) {
          expect(message).to.be.an('object');
        }
        done();
      });
    });

    describe('#parse() Sns event', () => {
      it('returns an array of Sns objects', (done) => {
        const messages = parse(snsEvent);
        expect(messages).to.be.an('array');
        for(let message of messages) {
          expect(message).to.be.an('object');
        }
        done();
      });
    });

    describe('#parse() S3 event', () => {
      it('returns an S3 object', (done) => {
        const message = parse(s3Event);
        expect(message).to.be.an('object');
        done();
      });
    });

    describe('#parse() DynamoDB Stream event', () => {
      it('returns an array of DynamoDB Stream objects', (done) => {
        const messages = parse(dynamodbEvent);
        expect(messages).to.be.an('array');
        for(let message of messages) {
          expect(message).to.be.an('object');
        }
        done();
      });
    });

    describe('#parse() unsupported event', () => {
      it('returns null', (done) => {
        const messages = parse({});
        expect(messages).to.be.an('null');
        done();
      });
    });

  });
});
