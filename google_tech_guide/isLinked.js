// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1212/

// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1214/

var hasLinkListCycle = function (head) {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      return true;
      // return findCyclePos(head, fast)
    }
  }
  return false;
};
const findCyclePos = (head, intersection) => {
  let p1 = head;
  let p2 = intersection;
  let i = 0;
  while (p1 != p2) {
    p1 = p1.next;
    p2 = p2.next;
    i++;
  }
  return i;
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
