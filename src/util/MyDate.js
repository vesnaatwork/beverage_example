class MyDate {
  constructor() {
    this.date = new Date();
  }

  toString() {
    return `${this.date.getFullYear()}-${
      this.date.getMonth() + 1
    }-${this.date.getDate()} ${this.date.getHours()}:${this.date.getMinutes()}`;
  }
}

module.exports = MyDate;
