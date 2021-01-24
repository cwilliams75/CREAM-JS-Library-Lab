const { TestScheduler } = require("jest");
const Queue = require("./Queue");

test("Enqueue Test", () => {
  // Given
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  // When
  const expected = 2;
  const actual = queue.size();

  // Then
  expect(actual).toEqual(expected);
});

test("dequeue Test", () => {
  // Given
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.dequeue();
  // When
  const expected = 1;
  const actual = queue.size();

  // Then
  expect(actual).toEqual(expected);
});

test("isEmpty Test", () => {
  // Given
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);

  // When
  const expected = false;
  const actual = queue.isEmpty();

  // Then
  expect(actual).toEqual(expected);
});

test("isEmpty Test2", () => {
  // Given
  const queue = new Queue();

  // When
  const expected = true;
  const actual = queue.isEmpty();

  // Then
  expect(actual).toEqual(expected);
});

test("peek Test", () => {
  // Given
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);

  // When
  const expected = 1;
  const actual = queue.peek();

  // Then
  expect(actual).toEqual(expected);
});

test("size Test", () => {
  // Given
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);

  // When
  const expected = 2;
  const actual = queue.size();

  // Then
  expect(actual).toEqual(expected);
});
