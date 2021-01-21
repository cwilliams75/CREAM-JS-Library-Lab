const { TestScheduler } = require("jest");
const Dictionary = require("./Dictionary");

test("Set Test", () => {
  //GIVEN
  const dictionary = new Dictionary();
  //WHEN
  dictionary.set("key", "value");
  //THEN
  expect(dictionary.get("key")).toEqual("value");
});

test("Get Test", () => {
  //GIVEN
  const dictionary = new Dictionary();
  dictionary.set("key", "value");
  //WHEN
  const value = dictionary.get("key");
  //THEN
  expect(value).toEqual("value");
});

test("HasKey Test", () => {
  //GIVEN
  const dictionary = new Dictionary();
  dictionary.set("key", "value");
  //WHEN
  const value = dictionary.hasKey("key");
  //THEN
  expect(value).toEqual(true);
});

test("Remove Test", () => {
  //GIVEN
  const dictionary = new Dictionary();
  dictionary.set("key", "value");
  //WHEN
  dictionary.remove("key");
  //THEN
  expect(dictionary.hasKey("key")).toEqual(false);
});
test("KeyValues Test", () => {
    //GIVEN
    const dictionary = new Dictionary();
    dictionary.set("key", "value");
    //WHEN
    dictionary.remove("key");
    //THEN
    expect(dictionary.hasKey("key")).toEqual(false);
  });
  test("Keys Test", () => {
    //GIVEN
    const dictionary = new Dictionary();
    dictionary.set("key1", "value1");
    dictionary.set("key2", "value2");
    //WHEN
    const keys = dictionary.keys();
    //THEN
    expect(keys).toEqual(["key1","key2"]);
  });
  test("Values Test", () => {
    //GIVEN
    const dictionary = new Dictionary();
    dictionary.set("key1", "value1");
    dictionary.set("key2", "value2");
    //WHEN
    const values = dictionary.values();
    //THEN
    expect(values).toEqual(["value1","value2"]);
  });
