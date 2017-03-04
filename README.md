# alai, AWS Lambda Account ID

Parse your AWS AccountID in your AWS Lambda function.

```js
module.exports.handler = function(event, context, callback) {
  callback(null,
    {
      accountId: require('alai').parse(context)
    }
  );
};
```
