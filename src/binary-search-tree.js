const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(value) {
    this._root = addWithIn(this._root, value)

    function addWithIn(node, value) {
      if (!node) {
        return new Node(value)
      }

      if (node.data === value)
        return node;

      if (value < node.data) {
        node.left = addWithIn(node.left, value)
      }
      else {
        node.right = addWithIn(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return searchWithIn(this._root, value)

    function searchWithIn(node, value) {
      if (!node) return false;

      if (node.data === value) return true;

      return value < node.data ?
        searchWithIn(node.left, value) :
        searchWithIn(node.right, value);
    }
  }

  find(value) {
    return searchWithIn(this._root, value)

    function searchWithIn(node, value) {
      if (!node) return null;

      if (node.data === value) return node;

      return value < node.data ?
        searchWithIn(node.left, value) :
        searchWithIn(node.right, value);
    }
  }

  remove(value) {
    this._root = removeNode(this._root, value);

    function removeNode(node, value) {
      if (!node) return null

      if (value < node.data) {
        node.left = removeNode(node.left, value)
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value)
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;

        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data)

        return node;
      }
    }
  }

  min() {
    if(!this._root){
      return;
    }

    let node = this._root;
    while(node.left){
      node = node.left;
    }
    return node.data
  }

  max() {
    if(!this._root){
      return;
    }

    let node = this._root;
    while(node.right){
      node = node.right;
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};