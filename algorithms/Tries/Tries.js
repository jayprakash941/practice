let ALPHABET_SIZE = 26;

class TrieNode {
  constructor() {
    this.isEndOfTheWord = false;
    this.children = new Array(ALPHABET_SIZE);
    for (let i = 0; i < ALPHABET_SIZE; i++) {
      this.children[i] = null;
    }
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let level;
    let l = word.length;
    let index;
    let cur = this.root;

    for (level = 0; level < l; level++) {
      index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);
      if (cur.children[index] === null) {
        cur.children[index] = new TrieNode();
      }
      cur = cur.children[index];
    }
    cur.isEndOfTheWord = true;
  }
  search(word) {
    let level;
    let l = word.length;
    let index;
    let cur = this.root;

    for (level = 0; level < l; level++) {
      index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);
      if (cur.children[index] === null) {
        return false;
      }
      cur = cur.children[index];
    }
    return cur.isEndOfTheWord;
  }
  startsWith(word) {
    let cur = this.root;
    let level;
    let l = word.length;
    let index;

    for (level = 0; level < l; level++) {
      index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);
      if (cur.children[index] === null) {
        return false;
      }
      cur = cur.children[index];
    }
    return true;
  }
}
