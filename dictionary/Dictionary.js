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

  //remove(key): remove the value from the dictionary
  remove(key) {
    if (this.hasKey(key)) {
      delete this.data[key];
      return true;
    }
    return false;
  }

  //keyValues: return an array containing all the pairs.
  keyValues() {
    const keyValuePairs = [];
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        keyValuePairs.push(key + ": " + this.data[key]);
      }
    }
    return keyValuePairs;
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
      // 'key1'
      // 'key2'
      valuesArray.push(this.data[key]);
    }
    return valuesArray;
  }

  //size(): return the number of values the dictionary contains.
  size() {
    return this.keys().length;
  }

  //isEmpty(): return true if the size equals zero.
  isEmpty() {
    return this.size() === 0;
  }

  //clear(): remove all values from the dictionary.
  clear() {
    this.data = {};
  }
}

const dictionary = new Dictionary();
dictionary.set("Undefined Integers", { name: "CaptainCorey" });
module.exports = Dictionary;
