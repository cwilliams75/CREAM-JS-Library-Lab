const { TestScheduler } = require("jest");
const Dictionary = require("./Dictionary");

test("First Test", () => {
  //GIVEN
  const dictionary = new Dictionary();
  //WHEN
  dictionary.add("key", "value");
  //THEN
  expect(dictionary.get("key")).toEqual("value");
});
