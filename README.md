# validity-number

Validity style validator to ensure a property is a float or an integer

## Installation

```
npm install validity-number --save
```

## Usage

Below is a simple example for usage with schemata and save:

``` js
var validateNumber = require('validity-number')
  , schemata = require('schemata')

var schema = schemata(
    { value:
      { type: Number
      , validators: { all: [ validateNumber ] }
      }
    })
```
