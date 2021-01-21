class Dictionary {
  constructor() {
    this.data = {};
  }

  //set(key, value): add a new element to the dictionary. If the key already exists, the existing value will be overwritten with the new one.
  set(key, value) {
    this.data[key] = value;
  }

  //get(key): return the value associated with the passed key.
  get(key) {
    return this.data[key];
  }

  //hasKey(key): return true if the key exists in the dictionary
  hasKey(key) {
    return this.data[key] != null;
  }

  /**
   * remove the value from the dictionary
   * @param {string} key
   */
  remove(key) {
    if (this.hasKey(key)) {
      delete this.data[key];
      return true;
    }
    return false;
  }

  //keyValues : return an array containing all the pairs.
  keyValues() {
    return Object.values(this.data);
  }

  //keys: return all the keys in the dictionary.
  keys() {
    let keysArray = [];
    for (const key in this.data) {
      keysArray.push(key);
    }
    return keysArray;
  }

  //values: return all the values in the dictionary.
  values() {
    let valuesArray = [];
    for (const key in this.data) {
      console.log(key);
      // 'key1'
      // 'key2'
      valuesArray.push(this.data[key]);
    }
    return valuesArray;
  }
}
const dictionary = new Dictionary();
dictionary.set("Undefined Integers", { name: "CaptainCorey" });

module.exports = Dictionary;
