'use strict';

module.exports.parse = ctx => {
  return parseInt(ctx.invokedFunctionArn.split(':')[4], 10);
}
