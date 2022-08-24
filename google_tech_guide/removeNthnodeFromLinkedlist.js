var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }
  console.log(fast);

  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
};

var removeNthFromEndOld = function (head, n) {
  let slow = head;
  let fast = head;
  let count = 1;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    count++;
  }
  console.log(count, 'b', slow, '--', fast);
  count = Math.abs(count - n);
  if (count % 2 == 0) {
    count--;
  }
  while (count > 1) {
    slow = slow.next;
    count--;
  }
  console.log(count, 'a', slow, '--', fast);

  slow.next = slow.next.next;
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

let n = 2;
// let  o = removeNthFromEnd(list1, n)
let c = removeNthFromEnd(list1, n);
// console.log(c)
while (c != null) {
  console.log(c.val);
  c = c.next;
}
