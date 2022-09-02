var assert = require('assert')
  , numberValidator = require('../validator')

describe('Number Validator', function () {
  it('should allow floats', function (done) {
    numberValidator('value', 'Value', { value: 10.5 }, function (err, errors) {
      assert.equal(errors, undefined, 'An error was outputted')
      done()
    })
  })

  it('should allow float strings', function (done) {
    numberValidator('value', 'Value', { value: '10.5' }, function (err, errors) {
      assert.equal(errors, undefined, 'An error was outputted')
      done()
    })
  })

  it('should allow integers', function (done) {
    numberValidator('value', 'Value', { value: 10 }, function (err, errors) {
      assert.equal(errors, undefined, 'An error was outputted')
      done()
    })
  })

  it('should allow integer strings', function (done) {
    numberValidator('value', 'Value', { value: '10' }, function (err, errors) {
      assert.equal(errors, undefined, 'an error was outputted')
      done()
    })
  })

  // test for strings like 1.0, 2.0, 3.0000, 4.0000
  it('should allow strings of numbers which end in /\.0*/', function (done) {
    numberValidator('value', 'Value', { value: '1.0000' }, function (err, errors) {
      assert.equal(errors, undefined, 'an error was outputted')
      done()
    })
  })

  it('should output an error for a string', function (done) {
    numberValidator('value', 'Value', { value: 'test' }, function (err, errors) {
      assert.equal(errors, 'Value must be a number', 'No error was outputted')
      done()
    })
  })

  it('should output an error for an array', function (done) {
    numberValidator('value', 'Value', { value: [] }, function (err, errors) {
      assert.equal(errors, 'Value must be a number', 'No error was outputted')
      done()
    })
  })

  it('should output an error for an object', function (done) {
    numberValidator('value', 'Value', { value: {} }, function (err, errors) {
      assert.equal(errors, 'Value must be a number', 'No error was outputted')
      done()
    })
  })

  it('should output an error for a null', function (done) {
    numberValidator('value', 'Value', { value: null }, function (err, errors) {
      assert.equal(errors, 'Value must be a number', 'No error was outputted')
      done()
    })
  })

  it('should output an error for undefined', function (done) {
    numberValidator('value', 'Value', { value: undefined }, function (err, errors) {
      assert.equal(errors, 'Value must be a number', 'No error was outputted')
      done()
    })
  })

  it('should output an error for NaN', function (done) {
    numberValidator('value', 'Value', { value: NaN }, function (err, errors) {
      assert.equal(errors, 'Value must be a number', 'No error was outputted')
      done()
    })
  })

})
