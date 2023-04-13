const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let list;
    if (this.length === 0) {
      return null;
    } else {
      list = this.head;
    }
    return list;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new ListNode(value)
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return null
    }

    let current = this.head;
    this.head = current.next;
    this.length--;

    return current.value;
  }
}

module.exports = {
  Queue
};
