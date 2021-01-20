const { TestScheduler } = require("jest");
const LinkedList = require("./LinkedList");
const ListNode = require("./ListNode");

test("Size Test", () => {
  // Given
  const listNode1 = new ListNode(10, null);
  const head = new ListNode(20, listNode1);
  const linkedList = new LinkedList(head);

  // When
  linkedList.size();
  const expected = 2;
  const actual = linkedList.size();

  // Then
  expect(expected).toEqual(actual);
});

test("Clear Test", () => {
  // Given
  const listNode1 = new ListNode(10, null);
  const head = new ListNode(20, listNode1);
  const linkedList = new LinkedList(head);

  // When
  linkedList.clear();
  const expected = 0;
  const actual = linkedList.size();

  // Then
  expect(expected).toEqual(actual);
});
test("GetLast Test", () => {
    // Given
    const listNode1 = new ListNode(10, null);
    const head = new ListNode(20, listNode1);
    const linkedList = new LinkedList(head);
  
    // When
    const expected = listNode1;
    const actual = linkedList.getLast();
  
    // Then
    expect(expected).toEqual(actual);
  });
  
  test("GetFirst Test", () => {
    // Given
    const listNode1 = new ListNode(10, null);
    const head = new ListNode(20, listNode1);
    const linkedList = new LinkedList(head);
  
    // When
    const expected = head;
    const actual = linkedList.getFirst();
  
    // Then
    expect(expected).toEqual(actual);
  });

// test("First Test", () => {
//   // Given
//  const linkedList = new LinkedList();

//   // When
//   linkedList.add(1);
//   const expected = true;
//   const actual = linkedList.contains(1);

//   // Then
//   expect(expected).toEqual(actual);
// });
