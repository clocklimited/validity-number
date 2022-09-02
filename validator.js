module.exports = numberValidator

function numberValidator(propertyName, errorName, object, callback) {
  var value = object[propertyName]
    , check = !isNaN(value) && value !== null && value !== undefined
    , error

  if (check) {
    check = !isNaN(parseFloat(value.toString()))
  }

  error = (check) ? null : errorName + ' must be a number'

  callback(null, error)
}
