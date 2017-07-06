'use strict';

const chai = require('chai');
const expect = chai.expect;

describe('aws-lambda-account-id', () => {
  it('should parse account id from ARN', () => {
    const id = require('./').parse({
      invokedFunctionArn: 'arn:aws:lambda:eu-west-1:123456676543:function:random'
    })

    expect(id).to.equal('123456676543');
  })

  it('should not remove leading zeroes from account id', () => {
    const id = require('./').parse({
      invokedFunctionArn: 'arn:aws:lambda:eu-west-1:012345667654:function:random'
    })

    expect(id).to.equal('012345667654');
  })
})
