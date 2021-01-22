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
    expect(actual).toEqual(expected);
  });

  test("Length Test", () => {
    // Given
    const stack = new Stack();
    stack.push(1);
  
    // When
    const expected = 1;
    const actual = stack.length();
  
    // Then
    expect(actual).toEqual(expected);
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
    expect(actual).toEqual(expected);
  });

  test("isEmpty Test", () => {
    // Given
    const stack = new Stack();

    // When
    const expected = 0;
    const actual = stack.length();
  
    // Then
    expect(actual).toEqual(expected);
  });
  
  test("Pop Test", () => {
    // Given
    const stack = new Stack();
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
  
    // When
    stack.pop()
    const expected = 3;
    const actual = stack.length();
  
    // Then
    expect(actual).toEqual(expected);
  });

  test("Print Test", () => {
    // Given
    const stack = new Stack();
    stack.push("world")
    stack.push("hello")
  
    // When
    const expected = ["hello", "world"];
    const actual = stack.print();
  
    // Then
    expect(actual).toEqual(expected);
  });
    
  test("Reverse Test", () => {
    // Given
    const stack = new Stack();
    stack.push(1)
    stack.push(2)
    stack.push(3)
  
    // When
    stack.reverse()
    const expected = 1;
    const actual = stack.peek();
  
    // Then
    expect(actual).toEqual(expected);
  });