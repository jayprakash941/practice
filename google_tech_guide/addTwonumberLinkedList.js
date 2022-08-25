var addTwoNumbers = function (l1, l2) {
  let result = new Node(null);
  let curr = result;
  let carry = 0,
    s = 0;
  while (l1 != null || l2 != null || carry != 0) {
    let x = l1 != null ? l1.val : 0;
    let y = l2 != null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new Node(sum % 10);
    curr = curr.next;
    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
  }

  return result.next;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    //     this.prev = null;
  }
}

let list2 = new Node(9);

// list1.next.next = new Node(3);
// list1.next.next.next = new Node(4);
// list1.next.next.next.next = new Node(5);
// // list1.next.next.next.next.next = new Node(5);
// // list1.next.next.next.next.next.next = new Node(6);

let list1 = new Node(9);
list1.next = new Node(9);

list2.next = new Node(9);
list2.next.next = new Node(9);
list2.next.next.next = new Node(9);

let c = addTwoNumbers(list1, list2);
// console.log(c)
while (c != null) {
  console.log(c.val);
  c = c.next;
}
