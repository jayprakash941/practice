let temHead = null;
var isPalindrome = function (head) {
  // First approch
  //  temHead = head;
  //   return check(head);

  // second

  if (head == null) return false;
  if (head.next == null) return true;
  let firstHalf = findFirstHalf(head);
  let reversFHalf = reverseFirstHalf(firstHalf);

  let p1 = head;
  let p2 = reversFHalf;
  let result = true;

  while (result && p2 != null) {
    if (p1.val != p2.val) result = false;
    p1 = p1.next;
    p2 = p2.next;
  }
  // Restore the list and return the result.
  firstHalf.next = reverseFirstHalf(reversFHalf);
  return result;
};

function findFirstHalf(head) {
  let slow = head;
  let fast = head;

  while (fast.next != null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow.next;
}

function reverseFirstHalf(head) {
  let c = head;
  let next = null;
  let r = null;

  while (c != null) {
    next = c.next;
    c.next = r;
    r = c;
    c = next;
  }
  head = r;
  return head;
}

function check(cur) {
  if (cur != null) {
    if (!check(cur.next)) return false;
    if (cur.val !== temHead.val) return false;
    temHead = temHead.next;
  }
  return true;
}
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list1 = new Node(0);
list1.next = new Node(0);
// list1.next.next = new Node(0);
// list1.next.next.next = new Node(1);
// list1.next.next.next.next = new Node(2);
// list1.next.next.next.next.next = new Node(1);
// list1.next.next.next.next.next.next = new Node(6);

let c = isPalindrome(list1);
console.log(c);
// while(c != null){
//   console.log(c.val);
//   c = c.next;

// }
