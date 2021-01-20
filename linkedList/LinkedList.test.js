const { TestScheduler } = require('jest');
const LinkedList = require('./LinkedList');

test("First Test", () => {
    // Given
    const linkedList = new LinkedList();

    // When
    linkedList.add(1);
    const expected = true;
    const actual = linkedList.contains(1);
    
    // Then
    expect(expected).toEqual(actual);
  });