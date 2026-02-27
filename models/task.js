const { validate_integer } = require("../validators/vars");
class Task {
  constructor(params) {
    this.description = params.description ?? null;
    this.createdAt = params.createdAt ?? null;
    this.priority = params.priority ?? null;
    this.due_date = params.due_date ?? null;
    this.status = params.status ?? null;
    this.title = params.title ?? null;
    this.id = params.id ?? null;
  }

  updateStatus(params) {
    let result = {
      error_messages: [],
      success: false,
      value: null,
    };
    let newStatus = params.status ?? null;
    newStatus = validate_integer(newStatus);
    if (newStatus.success) {
      this.status = newStatus.value;
      result.success = true;
      result.value = this.status;
    } else {
      result.error_messages.push(
        "Invalid status value:\n" + newStatus.error_messages.join(",\n"),
      );
    }
    return result;
  }
}

module.exports = Task;
