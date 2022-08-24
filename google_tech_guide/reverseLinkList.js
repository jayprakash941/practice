// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1205/

var reverseList = function (head) {
  let cur = head;
  let revs = null;
  let next = null;
  while (cur != null) {
    next = cur.next;
    cur.next = revs;
    revs = cur;
    cur = next;
  }

  head = revs;
  return head;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);
list1.next.next.next = new Node(4);
list1.next.next.next.next = new Node(5);
// list1.next.next.next.next.next = new Node(6);
let c = reverseList(list1);
// console.log(c)
while (c != null) {
  console.log(c.val);
  c = c.next;
}
