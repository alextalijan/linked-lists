import Node from './Node.js';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.tail !== null) {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  get size() {
    let numberOfNodes = 0;
    let tmp = this.head;
    while (tmp !== null) {
      numberOfNodes += 1;
      tmp = tmp.nextNode;
    }

    return numberOfNodes;
  }

  at(index) {
    let tmp = this.head;
    let iterator = 0;
    while (iterator < index) {
      tmp = tmp.nextNode;
      iterator += 1;
      if (tmp === null) {
        break;
      }
    }

    return tmp;
  }

  pop() {
    let tmp = this.head;
    while (tmp.nextNode !== this.tail) {
      tmp = tmp.nextNode;
    }

    tmp.nextNode = null;
  }

  contains(value) {
    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }

    return false;
  }

  find(value) {
    let tmp = this.head;
    let index = 0;
    while (tmp !== null) {
      if (tmp.value === value) return index;
      tmp = tmp.nextNode;
      index += 1;
    }

    return null;
  }

  toString() {
    let string = '';
    let tmp = this.head;
    while (tmp !== null) {
      string += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }

    string += 'null';
    return string;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else {
      let iterator = 0;
      let tmp = this.head;
      while (iterator < index - 1) {
        tmp = tmp.nextNode;
        iterator += 1;
        if (tmp === null) {
          return;
        }
      }

      const newNode = new Node(value, tmp.nextNode);
      tmp.nextNode = newNode;
    }
  }

  removeAt(index) {
    if (index === 0) {
      let tmp = this.head.nextNode;
      this.head.nextNode = null;
      this.head = tmp;
    } else {
      let iterator = 0;
      let tmp = this.head;
      while (iterator < index - 1) {
        tmp = tmp.nextNode;
        iterator += 1;
        if (tmp === null) return;
      }

      const nodeToRemove = tmp.nextNode;
      tmp.nextNode = nodeToRemove.nextNode;
      nodeToRemove.nextNode = null;
    }
  }
}

export default LinkedList;
