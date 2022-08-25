class Node {
  constructor(v) {
    this.v = v;
    this.next = null;
  }
}

var MyLinkedList = function () {
  this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.head === null) {
    return -1;
  }
  var temp = this.head;
  var count = 0;
  if (index === 0) {
    return this.head.v;
  }
  while (temp !== null) {
    if (count++ === index) {
      return temp.v;
    }
    temp = temp.next;
  }
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  var node = new Node(val);
  if (this.head === null) {
    return (this.head = node);
  }
  node.next = this.head.next;
  this.head = node;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  var node = new Node(val);
  if (this.head === null) {
    return (this.head = node);
  }
  var temp = this.head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = node;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  var node = new Node(val);
  if (this.head === null) {
    return;
  }
  var prev = null;
  var temp = this.head;
  if (index === 0) {
    node.next = this.head;
    this.head = node;
    return;
  }
  while (temp.next !== null && index > 0) {
    prev = temp;
    temp = temp.next;
    index--;
  }
  if (index === 0) {
    node.next = temp;
    prev.next = node;
  }
};

MyLinkedList.prototype.print = function () {
  if (this.head === null) {
    return console.log(null);
  }
  var curr = this.head;
  var str = '';
  while (curr) {
    str += curr.v + ' ';
    curr = curr.next;
  }
  console.log(str);
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.head === null || index < 0) {
    return null;
  }
  let cur = this.head;
  let prev = null;
  if (index === 0) {
    this.head = cur.next;
    return cur.next;
  }
  while (cur.next != null && index > 0) {
    prev = cur;
    cur = cur.next;
  }
  prev.next = cur.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 */
var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtHead(2);
obj.addAtTail(3);
obj.addAtIndex(0, 4);
obj.print();
obj.deleteAtIndex(1);
obj.print();
var param_1 = obj.get(0);
console.log(param_1);
