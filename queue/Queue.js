/**FIFO  First In, First Out */
class Queue {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  /**
   * Adds value to the  back of the queue and updates the length */
  enqueue(value) {
    this.data.push(value);
    this.length++;
  }

  /**Removes a value from the front of the queue.
   *
   * Checks to see if there is any value in the queue then pops off the value that was added first. Then it decrements the length */
  dequeue() {
    if (this.length > 0) {
      this.data.shift();
      this.length--;
    }
  }

  /**Returns true if queue has no values */
  isEmpty() {
    return this.data.length === 0;
  }

  /**Returns front value without removing.
   *
   * Set Variable equal to the length.  */
  peek() {
    return !this.isEmpty() ? this.data[0] : undefined;
  }

  /**Returns the number of values in queue */
  size() {
    return this.data.length;
  }
}
module.exports = Queue;
