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
  expect(actual).toEqual(expected);
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
  expect(actual).toEqual(expected);
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
  expect(actual).toEqual(expected);
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
  expect(actual).toEqual(expected);
});

test("getAt Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);

  // When
  const expected = 1;
  const actual = linkedList.getAt(0);

  // Then
  expect(actual).toEqual(expected);
});

test("add Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);

  // When
  linkedList.add(3);
  const expected = 3;
  const actual = linkedList.getLast().data;

  // Then
  expect(actual).toEqual(expected);
});

test("insertAtBeginning Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);

  // When
  linkedList.insertAtBeginning(3);
  const expected = 3;
  const actual = linkedList.getFirst().data;

  // Then
  expect(actual).toEqual(expected);
});

test("insertAt Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);
  linkedList.add(3);

  // When
  linkedList.insertAt(4, 1);
  const expected = 4;
  const actual = linkedList.getAt(1);

  // Then
  expect(actual).toEqual(expected);
});

test("deleteLastNode Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);

  // When
  linkedList.deleteLastNode();
  const expected = 1;
  const actual = linkedList.getLast().data;

  // Then
  expect(actual).toEqual(expected);
});

test("deleteFirstNode Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);

  // When
  linkedList.deleteFirstNode();
  const expected = 2;
  const actual = linkedList.getFirst().data

  // Then
  expect(actual).toEqual(expected);
});

test("removeFrom Test", () => {
  // Given
  const listNode1 = new ListNode(2, null);
  const head = new ListNode(1, listNode1);
  const linkedList = new LinkedList(head);
  linkedList.add(3);

  // When
  linkedList.removeFrom(1);
  const expected = 3;
  const actual = linkedList.getAt(1);

  // Then
  expect(actual).toEqual(expected);
});


