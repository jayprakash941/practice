class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
  }

  get(index) {
    if (index < 0 || this.head === null) {
      return null;
    }
    if (index === 0) {
      return this.head.val;
    }
    let cur = this.head;
    let count = 0;
    while (cur != null) {
      if (count++ === index) {
        return cur.val;
      }
      cur = cur.next;
    }
    return null;
  }

  addAtHead(val) {
    let node = new Node(val);

    if (this.head === null) {
      this.head = node;
      return this.head;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return this.head;
  }

  addAtTail(val) {
    let node = new Node(val);

    if (this.head === null) {
      this.head = node;
      return this.head;
    }
    let cur = this.head;
    let prev = null;
    while (cur.next != null) {
      cur = cur.next;
    }
    cur.next = node;
    node.prev = cur;
  }

  addAtIndex(index, val) {
    if (index < 0 || this.head === null) {
      return null;
    }
    let node = new Node(val);
    let cur = this.head;
    let prev = null;
    if (index === 0) {
      node.next = cur;
      cur.prev = node;
      this.head = node;
      return;
    }
    while (cur.next != null && index > 0) {
      prev = cur;
      cur = cur.next;
      index--;
    }
    node.next = cur;
    cur.prev = node;
    prev.next = node;
    node.prev = prev;
  }

  deleteAtIndex(index) {
    if (index < 0 || this.head === null) {
      return null;
    }

    let cur = this.head;
    let prev = null;

    if (index === 0) {
      this.head = cur.next;
      this.head.prev = prev;
      return cur.val;
    }

    while (cur.next != null && index > 0) {
      prev = cur;
      cur = cur.next;
      index--;
    }

    prev.next = cur.next;
    cur.next.prev = prev;
    return cur.val;
  }

  printList() {
    var curr = this.head;
    var str = '';
    while (curr) {
      str += curr.val + ' ';
      curr = curr.next;
    }
    console.log(str);
  }
}

// /**
//  * Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtHead(2);
obj.addAtIndex(1, 5);
obj.addAtTail(3);

obj.printList();
obj.deleteAtIndex(1);
obj.printList();
var param_1 = obj.get(3);
console.log(param_1);
