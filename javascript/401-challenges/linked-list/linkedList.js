'use strict';

const Node = require('./Node.js');
const LinkedList = require('./index.js')

const node1 = new Node(3);
const node2 = new Node(4);
const node3 = new Node(5);
const node4 = new Node(7);
const node5 = new Node(10);
const node6 = new Node(15);
const node7 = new Node(20);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

const list = new LinkedList(node1);

console.log(list.toString());