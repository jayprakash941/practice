var hasLinkListCycle = function (head) {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      return true;
    }
  }
  return false;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let n = new Node(3);
n.next = new Node(2);
n.next.next = new Node(0);
n.next.next.next = new Node(-4);
n.next.next.next.next = n.next;
console.log(hasLinkListCycle(n));
// let c = n;
// while(c != null){
//   console.log(c.val);
//   c = c.next;

// }
