// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1295/

var reverseList = function (head, n) {
  if (head == null || head.next == null) return head;
  let dummy = new Node(0);
  dummy.next = head;
  let fast = dummy,
    slow = dummy;

  let i;
  for (
    i = 0;
    fast.next != null;
    i++ //Get the total length
  )
    fast = fast.next;

  for (
    let j = i - (n % i);
    j > 0;
    j-- //Get the i-n%i th node
  )
    slow = slow.next;

  fast.next = dummy.next; //Do the rotation
  dummy.next = slow.next;
  slow.next = null;
  return dummy.next;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list1 = new Node(1);
list1.next = new Node(2);
// list1.next.next = new Node(3);
// list1.next.next.next = new Node(4);
// list1.next.next.next.next = new Node(5);
// list1.next.next.next.next.next = new Node(6);
let c = reverseList(list1, 2);
// console.log(c)
while (c != null) {
  console.log(c.val);
  c = c.next;
}
