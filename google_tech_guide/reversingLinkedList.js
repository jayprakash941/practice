// - https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1204/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var reverse = function (head) {
  var prev = null;
  var current = head;
  var next = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
};

one = new Node(1);
two = new Node(2);
three = new Node(3);
four = new Node(4);
five = new Node(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

console.log(one);
console.log(reverse(one));
