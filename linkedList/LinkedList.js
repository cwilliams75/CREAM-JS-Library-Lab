const ListNode = require ('./ListNode');


class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  //size(): returns the number of nodes in the linked list
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  //clear(): empties the linked list of all nodes
  clear() {
    this.head = null;
  }

  //getLast(): returns the last node in the linked list
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  //getFirst(): returns the first node in the linked list
  getFirst() {
    return this.head;
  }

  //getAt(): returns a node at a given index
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

  //add(element): adds a node to the end of the linked list
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

  //insertAtBeginning(element): adds a node to the beginning of the linked list 
  insertAtBeginning(element) {
    let newNode = new ListNode(element);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  //insertAt(data, index): inserts a node into the linked list at a given index
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

  //deleteLastNode(): removes the last node of the linked list
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

  //deleteFirstNode(): removes the first node of the linked list
  deleteFirstNode() {
    if(!this.head){
        return;
    }
    this.head = this.head.next;
    return this.head;
  }

  //deleteAt(index): deletes a node at a given index in the linked list
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