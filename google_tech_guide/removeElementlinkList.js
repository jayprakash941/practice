// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1207/

var removeElements = function (head, val) {
  if (head == null) {
    return null;
  }
  let d = new Node(null);
  d.next = head;
  let cur = d;

  while (cur.next != null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return d.next;

  //   if (head === null) {
  //     return null;
  //   }
  //   head.next = removeElements(head.next, v);
  //   if (head.val === v) {
  //     return head.next;
  //   }
  //   return head;
  // }
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(6);
list1.next.next.next = new Node(3);
list1.next.next.next.next = new Node(4);
list1.next.next.next.next.next = new Node(5);
list1.next.next.next.next.next.next = new Node(6);

let c = removeElements(list1, 6);
// console.log(c)
while (c != null) {
  console.log(c.val);
  c = c.next;
}
