class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = new Node(value);
    this.root = this.insertNode(this.root, node);
  }

  insertNode(root, node) {
    if (root === null) {
      return node;
    }
    if (node.value < root.value) {
      root.left = this.insertNode(root.left, node);
    } else {
      root.right = this.insertNode(root.right, node);
    }
    return root;
  }

  del(value) {
    this.root = this.delRec(this.root, value);
  }

  delRec(root, value) {
    if (root === null) {
      return null;
    }

    if (value < root.value) {
      root.left = this.delRec(root.left, value);
      return root;
    } else if (value > root.value) {
      root.right = this.delRec(root.right, value);
      return root;
    }

    if (root.left === null) {
      root = root.right;
    } else if (root.right === null) {
      root = root.left;
    } else if (root.left === null && root.right === null) {
      root = null;
    } else {
      let minNode = this.getMinNode(root.right);

      root.value = minNode.value;

      root.right = this.delRec(root.right, minNode.value);
    }

    return root;
  }

  getRoot() {
    return this.root;
  }

  getMinNode(root) {
    if (root === null) {
      return null;
    }
    while (root.left !== null) {
      root = root.left;
    }
    return root;
  }

  print(root) {
    if (root === null) {
      return;
    }
    console.log(root.value);
    this.print(root.left);
    this.print(root.right);
  }
}

tree = new BinarySearchTree();
tree.add(8);
tree.add(7);
tree.add(15);
tree.add(3);
tree.add(6);
tree.add(11);
tree.add(14);
tree.add(1);
tree.add(2);
tree.add(4);
tree.add(5);
tree.add(9);
tree.add(10);
tree.add(12);
tree.add(13);
tree.del(15);
tree.print(tree.getRoot());
