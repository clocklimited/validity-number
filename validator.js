module.exports = numberValidator

function numberValidator(propertyName, errorName, object, callback) {
  var value = object[propertyName]
    , check = value !== null && value !== undefined
    , error

  if (check) {
    check = Number(value).toString() === value.toString()
  }

  error = (check) ? null : errorName + ' must be a number'

  callback(null, error)
}
