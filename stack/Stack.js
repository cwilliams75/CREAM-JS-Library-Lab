class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    // When we push an element to the stack, we have to store it in
    //  the top position of data and need to increment the top variable 
    // so that the top will point to the next empty place.
    push(element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
    // To get the length of the stack, we can return the top value.
   length() {
      return this.top;
   }

//    To get the peek element of the stack, we can use the top-1 
//    attribute of Stack class:
   peek() {
      return this.data[this.top-1];
   }

//    If the value of the top is equal to 0 then there is no element
//    in the Stack.
   isEmpty() {
     return this.top === 0;
   }

//    When we pop an element from the stack, we need to ensure that the stack is
//  not empty, otherwise the value of the top will be decremented
//  below zero
   pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop(); // removes the last element
     }
   }
 
   print() {
      var top = this.top - 1; // because top points to index where new element to be inserted
      while(top >= 0) { // print upto 0th index
          return this.data[top];
           top--;
       }
    }

    // To print the stack in reverse order, we can use recursion.

    reverse() {
       this._reverse(this.top - 1 );
    }
    _reverse(index) {
       if(index != 0) {
          this._reverse(index-1);
       }
       return this.data[index];
    }
}

module.exports = Stack;