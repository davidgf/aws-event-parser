'use strict';

import * as chai from 'chai';
import { expect } from 'chai';
import { SnsEvent } from '../lib/SnsEvent';
import * as event from './fixtures/sns.json';

describe('SnsEvent', () => {

  let snsEvent;

  context('when a correct SNS event was provided', () => {
    before(() => {
      snsEvent = new SnsEvent(event);
    })
    describe('#messages()', () => {
      it('returns an array of objects', (done) => {
        const messages = snsEvent.messages
        expect(messages).to.be.an('array');
        for(let message of messages) {
          expect(message).to.be.an('object');
        }
        done();
      });
    });
  });
});
