function validate_integer(value) {
  let result = {
    error_messages: [],
    success: false,
    value: null,
  };
  result.value = value;
  if (typeof value === "number" && Number.isInteger(value)) {
    result.success = true;
  } else {
    result.error_messages.push("Value must be an integer.");
  }
  return result;
}

module.exports = {
  validateInteger,
};
