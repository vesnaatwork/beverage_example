class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
  toString(){
    return `Error: ${this.name}`
  }
}
module.exports = ValidationError;
