# alai, AWS Lambda Account ID

[![npm](https://img.shields.io/npm/v/alai.svg)]()
[![license](https://img.shields.io/github/license/sbstjn/alai.svg)]()


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
