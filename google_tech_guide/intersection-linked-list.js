// var getIntersectionNode = function(headA, headB) {
//     let h1 = headA;
//     let h2 = headB;
//   while(h1 != h2 ){
//     if(h1 == null || h2 == null) return null;

//   if(h1.next == null  ){
//        h1 = headB
//      }else{
//          h1 = h1.next;
//      }

//     if(h2.next == null  ){
//        h2 = headA
//      }else{
//          h2 = h2.next;
//      }

//   }
//  if(h1 == h2) return h1;
//   return null;
// };

let getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let h1 = headA;
  let h2 = headB;
  while (h1 !== h2) {
    h1 = h1.next;
    h2 = h2.next;
    if (h1 === h2) {
      return h1;
    }
    if (h1 === null) {
      h1 = headB;
    }
    if (h2 === null) {
      h2 = headA;
    }
  }
  return h1;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list1 = new Node(1);
list1.next = new Node(9);
list1.next.next = new Node(1);
list1.next.next.next = new Node(2);
list1.next.next.next.next = new Node(4);

let list2 = new Node(2);
list2.next = new Node(3);
list2.next.next = new Node(5);
list2.next.next.next = list1.next.next.next;
// list2.next.next.next.next.next = new Node(5);

console.log(getIntersectionNode(list1, list2));
// let c = n;
// while(c != null){
//   console.log(c.val);
//   c = c.next;

// }
