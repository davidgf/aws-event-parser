'use strict';

import * as chai from 'chai';
import { expect } from 'chai';
import { KinesisStream } from '../lib/KinesisStream';
import * as event from './fixtures/kinesis.json';

describe('KinesisStream', () => {

  let kinesisStream;

  context('when a correct Kinesis Stream event was provided', () => {
    before(() => {
      kinesisStream = new KinesisStream(event);
    })
    describe('#messages()', () => {
      it('returns an array of objects', (done) => {
        const messages = kinesisStream.messages
        expect(messages).to.be.an('array');
        for(let message of messages) {
          expect(message).to.be.an('object');
        }
        done();
      });
    });
  });
});
