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

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
        if (counter === index) {
           return node.data;
        }
        counter++;
        node = node.next;
    }
    return null;
  }

  add(element) { 
    let newNode = new ListNode(element); 
    if(!this.head) {
      this.head = newNode;
      return this.head;
    }
    let tail = this.head;
    while(tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
  } 

  insertAtBeginning(element) {
    let newNode = new ListNode(element);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  // insertAt(data, index) {
  //   if (!this.head) {
  //       this.head = new ListNode(data);
  //       return;
  //   } 
  //   if (index === 0) {
  //       this.head = new ListNode(data, this.head);
  //       return;
  //   }
  //   const previous = this.getAt(index - 1);
  //   let newNode = new ListNode(data);
  //   newNode.next = previous.next;
  //   previous.next = newNode;       
  //   return this.head
  // }

  deleteLastNode() {
    if(!this.head){
      return null;
    }
    if(!this.head.next){
        this.head = null;
        return;
    }
    let previous = this.head;
    let tail = this.head.next;

    while(tail.next !== null){
        previous = tail;
        tail = tail.next;
    }

    previous.next = null;
    return this.head;
  }

  deleteFirstNode() {
    if(!this.head){
        return;
    }
    this.head = this.head.next;
    return this.head;
  }

  // deleteAt(index) {
  //   if (!this.head) {
  //     this.head = new ListNode(data);
  //     return;
  //   } 
  //   if (index === 0) {
  //     this.head = this.head.next;
  //     return;
  //   }
  //   const previous = this.getAt(index - 1);
    
  //   if (!previous || !previous.next) {
  //     return;
  //   }
    
  //   previous.next = previous.next.next;     
  //   return this.head;
  // }
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