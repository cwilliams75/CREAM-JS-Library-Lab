class Dictionary {

  constructor() {
    this.data = {};
  }
  add(key, value) {
    this.data[key] = value;
  }
  get(key) {
    return this.data[key];
  }
}
const dictionary = new Dictionary();
dictionary.add("Undefined Integers", { name: "CaptainCorey" });

//const undefinedIntegers = dictionary.get("undefined integers");

module.exports = Dictionary;
