class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    const newNode = { value: value, next: null };
    current.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    let current = { value: value, next: this.head };
    this.head = current;
    this.length++;
  }

  // [100,10,5]
  // 2,99
  insert(index, value) {
    const newNode = new Node(value);
    let i = 1;
    if (index === 1) {
      this.prepend(value);
      return;
    }
    if (index === this.length + 1) {
      this.append(value);
      return;
    }
    let current = this.head;
    while (current) {
      if (i === index - 1) {
        newNode.next = current.next;
        current.next = newNode;
        console.log(this.head); //?
        this.length++;
        break;
      }
      current = current.next;
    }
    return this.head;
  }

  lookup() {}

  display() {
    let current = this.head;
    let data = [];
    while (current) {
      data.push(current.value); //?
      current = current.next;
    }
    console.log('Linked list: ', data);
    return data;
  }
}
const myLink = new LinkedList(10); //?
myLink.append(5);
myLink.prepend(100);
myLink.display(); //?
const newNode = new Node(90); //?
myLink.insert(2, 99); //?
myLink.display(); //?
