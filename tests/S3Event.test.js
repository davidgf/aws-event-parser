'use strict';

import * as chai from 'chai';
import { expect } from 'chai';
import { S3Event } from '../lib/S3Event';
import * as event from './fixtures/s3.json';

describe('S3Event', () => {

  let s3Event;

  context('when a correct S3 event was provided', () => {
    before(() => {
      s3Event = new S3Event(event);
    })
    describe('#message()', () => {
      it('returns an s3 object', (done) => {
        const message = s3Event.message;
        expect(message).to.be.an('object');
        done();
      });
    });
  });
});
