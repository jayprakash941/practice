// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1229/

var copyRandomList = function (head) {
  if (head === null) {
    return null;
  }
  let copy = new Map();
  let cur = head;

  while (cur !== null) {
    copy.set(cur, new Node(cur.val));
    cur = cur.next;
  }

  cur = head;

  while (cur !== null) {
    copy.get(cur).next = copy.get(cur.next) || null;
    copy.get(cur).random = copy.get(cur.random) || null;
    cur = cur.next;
  }
  return copy.get(head);
};
