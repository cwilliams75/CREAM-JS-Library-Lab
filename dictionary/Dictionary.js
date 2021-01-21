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
set(key, value){
  if (key != null & value != null) {
      const stringKey = this.toStrFn(key);
      this.table[stringKey] = new KeyValue(key, value);
      return true;
  }
  return false;
}



const dictionary = new Dictionary();
dictionary.add("Undefined Integers", { name: "CaptainCorey" });

//const undefinedIntegers = dictionary.get("undefined integers");

module.exports = Dictionary;
