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
      assert.equal(errors, undefined, 'An error was outputted')
      done()
    })
  })

  it('should output an error for a string', function (done) {
    numberValidator('value', 'Value', { value: 'test' }, function (err, errors) {
      assert.equal(errors, 'Value must be a float', 'No error was outputted')
      done()
    })
  })

  it('should output an error for an array', function (done) {
    numberValidator('value', 'Value', { value: [] }, function (err, errors) {
      assert.equal(errors, 'Value must be a float', 'No error was outputted')
      done()
    })
  })

  it('should output an error for an object', function (done) {
    numberValidator('value', 'Value', { value: {} }, function (err, errors) {
      assert.equal(errors, 'Value must be a float', 'No error was outputted')
      done()
    })
  })

  it('should output an error for a null', function (done) {
    numberValidator('value', 'Value', { value: null }, function (err, errors) {
      assert.equal(errors, 'Value must be a float', 'No error was outputted')
      done()
    })
  })

  it('should output an error for undefined', function (done) {
    numberValidator('value', 'Value', { value: undefined }, function (err, errors) {
      assert.equal(errors, 'Value must be a float', 'No error was outputted')
      done()
    })
  })
})
