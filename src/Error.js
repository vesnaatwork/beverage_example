class ValidationError extends Error {
    constructor(message,pubsub) {
      super(message); 
      this.name = "ValidationError"; 
      pubsub.publish("error", {name:this.name});
    }
  }
  