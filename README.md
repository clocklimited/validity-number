# validity-float

Validity style validator to ensure a property is a float

## Installation

```
npm install validity-float --save
```

## Usage

Below is a simple example for usage with schemata and save:

``` js
var validateFloat = require('validity-float')
  , schemata = require('schemata')

var schema = schemata(
    { value:
      { type: Number
      , validators: { all: [ validateFloat ] }
      }
    })
```