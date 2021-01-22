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

test("getAt Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);

  // When
  let selection = linkedList.getAt(1);

  // Then
  expect(selection).toEqual(2);
});

test("add Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);

  // When
  linkedList.add(3);

  // Then
  expect(linkedList.getLast().data).toEqual(3);
});

test("insertAtBeginning Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);

  // When
  linkedList.insertAtBeginning(3);

  // Then
  expect(linkedList.getFirst().data).toEqual(3);
});

// test("insertAt Test", () => {
//   // Given
//   const listNode2 = new ListNode(3, null);
//   const listNode1 = new ListNode(2, listNode2);
//   const head = new ListNode(1, listNode1);
//   const linkedList = new LinkedList(head);

//   // When
//   linkedList.insertAt(4, 2);

//   // Then
//   expect(linkedList[1].data).toEqual(3);
// });

test("deleteLastNode Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);

  // When
  linkedList.deleteLastNode();

  // Then
  expect(linkedList.getLast().data).toEqual(1);
});

test("deleteFirstNode Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);

  // When
  linkedList.deleteFirstNode();

  // Then
  expect(linkedList.getFirst().data).toEqual(2);
});

// test("deleteAt Test", () => {
//   // Given
//   const listNode1 = new ListNode(2, null);
//   const head = new ListNode(1, listNode1);
//   const linkedList = new LinkedList(head);

//   // When
//   linkedList.deleteAt(0);

//   // Then
//   expect(linkedList.getAt(0).data).toEqual(2);
// });


