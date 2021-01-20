const ListNode = require ('./ListNode');


class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }
}
module.exports = LinkedList;


  // add(element) {
  // }
  // addAt(index) {
  // }
  // remove() {
  // }
  // removeAt() {
  // }
  // contains() {
  //     return true;
  // }