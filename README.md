# Description

Support minimal index.js/index.coffee files that require and export all their siblings using their filenames

# Installation
```
npm install requireindex
```

# Usage
Assuming a structure like this

```
-lib/
  -index.js
  -Foo.js
  -bar/
    index.js
    f.js
    fing.js
  -bam.js

and the index.js files that look like this

```js
module.exports = require('requireindex')(__dirname)
```

the result of
```
require('lib')
```

is

```
{
  bam: { 
    m: [Function] 
  },
  bar: { 
    f: [Function],
    fing: [Function] 
  },
  Foo: { 
    l: [Function], 
    ls: [Function] 
  } 
}
```
