const { TestScheduler } = require('jest');
const Stack = require('./Stack');

test("Push Test", () => {
    // Given
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    // When
    const expected = 2;
    const actual = stack.length();
  
    // Then
    expect(expected).toEqual(actual);
  });

  test("Length Test", () => {
    // Given
    const stack = new Stack();
    stack.push(1);
  
    // When
    const expected = 1;
    const actual = stack.length();
  
    // Then
    expect(expected).toEqual(actual);
  });
  
  test("Peek Test", () => {
    // Given
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
  
    // When
    const expected = 2;
    const actual = stack.length();
  
    // Then
    expect(expected).toEqual(actual);
  });

  test("isEmpty Test", () => {
    // Given
    const stack = new Stack();

    // When
    const expected = 0;
    const actual = stack.length();
  
    // Then
    expect(expected).toEqual(actual);
  });
  
  test("Pop Test", () => {
    // Given
    const stack = new Stack();
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
  
    // When
    const expected = 3;
    const actual = stack.length();
  
    // Then
    expect(expected).toEqual(actual);
  });

  test("Print Test", () => {
    // Given
    const stack = new Stack();
    stack.top.push("hello world")
  
    // When
    const expected = "hello world";
    const actual = stack.print();
  
    // Then
    expect(expected).toEqual(actual);
  });
    
//   test("Reverse Test", () => {
//     // Given
//     const stack = new Stack();
//     stack.push(12345)
  
//     // When
//     const expected = 54321;
//     const actual = stack.reverse();
  
//     // Then
//     expect(expected).toEqual(actual);
//   });