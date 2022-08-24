// - https://leetcode.com/problems/odd-even-linked-list/
var oddEven = function (head) {
  if (head === null) {
    return true;
  }
  var odd = head;
  var even = head.next;
  var e = head.next;
  while (odd.next !== null && even.next !== null) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = e;
  return head;
};

class Node {
  constructor(v) {
    this.val = v;
    this.next = null;
  }
}

one = new Node(1);
two = new Node(2);
three = new Node(3);
four = new Node(4);
five = new Node(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

var result = oddEven(one);

if (result === null) {
  console.log(result);
}

while (result != null) {
  console.log(result.val);
  result = result.next;
}
