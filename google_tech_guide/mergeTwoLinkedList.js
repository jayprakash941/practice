// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1227/

var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  var mergedHead = new Node(null);
  crt = mergedHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2;
      l2 = l2.next;
    } else {
      crt.next = l1;
      l1 = l1.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;

  return mergedHead.next;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    //     this.prev = null;
  }
}

let list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(4);
// list1.next.next.next = new Node(4);
// list1.next.next.next.next = new Node(5);
// // list1.next.next.next.next.next = new Node(5);
// // list1.next.next.next.next.next.next = new Node(6);

let list2 = new Node(1);
list2.next = new Node(3);
list2.next.next = new Node(4);

let c = mergeTwoLists(list1, list2);
// console.log(c)
while (c != null) {
  console.log(c.val);
  c = c.next;
}
