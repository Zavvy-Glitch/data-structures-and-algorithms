const { BinaryTree, Node } = require('../trees.js');

test('BinarySearch is a class', () => {
  expect(typeof BinaryTree.prototype.constructor).toEqual('function');
});
test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Can successfully instantiate an empty tree', () => {
  expect(() => {
    const n = new BinaryTree();
    n.add()
  }).not.toThrow();
});

test('Can successfully instantiate a tree with a single root node', () => {
  const n = new BinaryTree();

  n.add(20)

  expect(n.root.data).toEqual(20)
});

test('Can successfully add a left child and right child to a single root node', () => {
  const n = new BinaryTree();

  n.add(20);
  n.add(15);
  n.add(89);

  expect(n.root.left.data).toEqual(15);
  expect(n.root.right.data).toEqual(89);
});

test('Can successfully return a collection from a preorder traversal', () => {
  const n = new BinaryTree();

  n.add(20);
  n.add(25);
  n.add(35);
  n.add(49);
  n.add(65);

  const root = n.getRootNode()
  
  console.log('-----------------', n.postOrder(root))

  expect().toEqual();
});

test('Can successfully return a collection from an inorder traversal', () => {
  expect(() => {
  }) .not.toThrow();
});

test('Can successfully return a collection from a postorder traversal', () => {
  expect(() => {
  }) .not.toThrow();
});

test('Can successfully return Max Value', () => {
  expect(() => {
  }) .not.toThrow();
});

test('Can successfully return Min Value', () => {
  expect(() => {
  }) .not.toThrow();
});
