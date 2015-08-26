module.exports = floatValidator

function floatValidator(propertyName, errorName, object, callback) {
  var value = object[propertyName]
    , check = value !== null && value !== undefined
    , error

  if (check) {
    check = Number(value).toString() === value.toString()
  }

  error = (check) ? null : errorName + ' must be a float'

  callback(null, error)
}
