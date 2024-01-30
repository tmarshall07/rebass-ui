class Debouncer {
  constructor(initialValue = null, delay = 500) {
    this.value = initialValue;
    this.delay = delay;
    this.timeout = null;
  }
  getValue() {
    return this.value;
  }
  setValue(newValue, callback) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.value = newValue;
      callback(newValue);
    }, this.delay);
  }
}
export default Debouncer;
//# sourceMappingURL=debouncer.js.map