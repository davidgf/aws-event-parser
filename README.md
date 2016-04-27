# aws-event-parser

aws-event-parser is a tiny utility that parses AWS events like SNS, S3, Kinesis Stream, DynamoDB Stream and returns a plain JavaScript object with no effort on your side.

### Example:
```javascript
var parse = require('aws-event-parser').parse;
var items = parse(kinesisEvent);
```

```javascript
import { parse } from 'aws-event-parser';
const items = parse(kinesisEvent);
```

## Installing

```
$ npm install --save aws-event-parser
```

### Contributing
Contributions are always welcome!

### Credits
Developed by [microapps] (http://microapps.com/)

## License
aws-event-parser is available under the MIT license. See the LICENSE file for more info.
