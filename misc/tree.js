
// Depth of a binary tree (Max depth)
let maxDepth = (root) => {
  if(root === null){
    return 0;
  }
  let left = 1 + maxDepth(root.left);
  let right = 1 + maxDepth(root.right);
  return Math.max(left, right);
}


//Maximum depth of n-ary tree  -- Todo


//merge 2 binary tree

let mergeBinaryTree = (t1, t2) => {
  if(t1 === null && t2 === null){
    return null;
  }
  
  if(t1 === null){
    return t2;
  }
  
  if(t2 === null){
    return t1;
  }
  let nTree = new Tree(t1.val+t2.val)
  
  nTree.left = mergeBinaryTree(t1.left, t2.left)
  nTree.right = mergeBinaryTree(t1.right, t2.right);
  
  return nTree;

}



//Sum of root to leaf path

let sumRootToLeaf= (root) => {
  let sum = 0;
  return rootToLeaf(root, sum);
}

let rootToLeaf = (root, sum) => {
  if(root === null){
    return 0
  }
  sum = sum + root.val;
  if(root.left === null && root.right === null){
  return sum
  }
  
    let reftsum = rootToLeaf(root.left, sum)
 
     let rightsum = rootToLeaf(root.right, sum);
  
  return reftsum+rightsum;
  
}


// is univalsal tree

let isUnivalTree = (root) =>{
  return isSame(root, root.val);
}

let isSame = (root, val) =>{
  if(root === null ){
    return true;
  }
  
  if(root.val != val)  return false;
  
  return isSame(root.left, val) && isSame(root.right, val);
}


//Leaf similar tree


// let isLeafSimilar = (r1, r2) =>{
  
// }
// class Solution {
// public:
//     bool leafSimilar(TreeNode* root1, TreeNode* root2) {
//         vector<int> a;
//         vector<int>  b;
//         traversal(root1,a);
//         traversal(root2,b);
//         return a==b;
//     }
    
//     void traversal(TreeNode* root, vector<int>&v){
        
//         if(root == NULL){
//             return;
//         }
//         if(root->left == NULL &&  root->right == NULL){
//             v.push_back(root->val);
//         }
        
//         if(root->left != NULL){
//             traversal(root->left, v);
//         }
        
//          if(root->right != NULL){
//             traversal(root->right, v);
//         }
//     }
// };


// binary tree path

let binaryTreePath = (tree) =>{
  
  let s = [];
  return traversal(tree, s, '');
}

let traversal1 = (t,s, cp) =>{
  
  if(t === null){
    return null
  }
  
  if(t.left === null && t.right === null){
       cp += t.val;
      s.push(cp);
    return;
  }
  
  cp += t.val+ '->';
  if(t.left !== null){
    traversal(t.left,s,cp);
  }
  
  if(t.right !== null){
   traversal(t.right,s,cp);
 
  }
  return s;
}


//Sum of left leaves

let sumLeftLeaves = (root) =>{
  return traversal(root, false);
}

let traversal2 = (root, isLeft) =>{
  
  if(root === null){
    return 0;
  }
  
  if(root.left === null && root.right === null && isLeft){
    return root.val;
  }
    let l = traversal(root.left, true);
    let r = traversal(root.right, false);
  
  return l+r;
}


/// sum of all nodes from root to leaf 

let hashPathSum = (root, t) => {
  return traversal(root, 0, t);
}

let traversal = (root, sum, t) => {
  
  if(root === null){
    return false;
  }
  
  if(root.left === null && root.right === null){
    return root.val+sum === t;
  }
  sum += root.val;
  return traversal(root.left, sum, t) || traversal(root.right, sum, t);
}

// left view of binary tree
let leftView = (root) =>{
  let res =[];
  let s = new Set();
  return view(root, res, s, 0);
}

let view = (root, res, s, currentLevel) => {
  if(root === null){
    return;
  }
  
  if(!s.has(currentLevel)){
    s.add(currentLevel);
    res.push(root.val)
  }
  
  view(root.left, res, s, currentLevel+1)
  view(root.right, res, s, currentLevel+1)
  
  return res;

}


// right view of binary tree

let rightView = (root) =>{
  let res =[];
  let s = new Set();
  return view(root, res, s, 0);
}

// let view = (root, res, s, currentLevel) => {
//   if(root === null){
//     return;
//   }
  
//   if(!s.has(currentLevel)){
//     s.add(currentLevel);
//     res.push(root.val)
//   }
  
//   view(root.right, res, s, currentLevel+1)
//   view(root.left, res, s, currentLevel+1)

  
//   return res;

// }

//invert tree

let invertTree = (root) => {
  if(root === null) return root;
  let left = invertTree(root.right);
  let right = invertTree(root.left);
  
  root.left = left;
  root.right = right;
  
  return root;
  
}


// is symmetric

let isSymmetric = (root) = >{
  if(root === null ) return true;
  return isMirror(root.left, root.right);
}

let isMirror = (l, r) => {
  
  if(l === null && r === null){
    return true;
  }else if(1 === null  || r === null) return false;
   else if(l.val !== r.val) return false;
  
  return isMirror(l.left, r.right) && isMirror(l.right, r.left);
}



// Cousins of binary tree

let isCousins = (root, x, y) => {
  let level = new Array(2);
  let parents = new Array(2);
  findNode(root, x, y, level, parents,0, new Tree(-1));
  if(level[0]===level[1] && parents[0] !== parents[1] ) return true;
  return false;
}

let findNode = (root, x, y, l, p, cl, cp) =>{
  if(root === null) return null;
  if(root.val === x){
    l[0] = cl;
    p[0] = cp.val
  }
   if(root.val === y){
    l[1] = cl;
    p[1] = cp.val
  }
  findNode(root.left, x, y, l, p, cl+1, root);
  findNode(root.right, x, y, l, p, cl+1, root)
}

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var root = new Tree(1);
var left = new Tree(2);
var right = new Tree(3);
var l1 = new Tree(4);
var r1 = new Tree(5);
var l2 = new Tree(11)

root.left = left;
root.right = right;
// root.left.left = l1;
root.left.right = r1;
root.right.left = l2;

var root1 = new Tree(2);
var left = new Tree(1);
var right = new Tree(4);
root1.left = left;
root1.right = right;
let target = 10
console.log(invertTree(root))