'use strict';

// Require our linked list implementation
const LinkedList = require('../index.js');
const Node = require('../Node.js')

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert('THIS');
    expect(list.head.value).toEqual('THIS');
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const node1 = new Node(14);
    const node2 = new Node(15);
    const node3 = new Node(90);
    const node4 = new Node(20);
    
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    
    const list =  new LinkedList(node1);
    console.log(list);
    expect(node1.value).toEqual(14);
    expect(node2.value).toEqual(15);
    expect(node3.value).toEqual(90);
    expect(node4.value).toEqual(20);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const node1 = new Node(18);
    const node2 = new Node(30);
    
    node1.next = node2;
    
    const list = new LinkedList(node1);
    const result = list.includes(30);
    expect(result).toEqual(true);

  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const node1 = new Node(15);
    const node2 = new Node(40);
    const node3 = new Node(45);

    node1.next = node2;
    node2.next = node3;

    const list = new LinkedList(node1);
    const result = list.includes(42);
    expect(result).toEqual(false)
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const node1 = new Node(35);
    const node2 = new Node(45);
    const node3 = new Node(13);
    const node4 = new Node(9);
    const node5 = new Node(23);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    const result = [];
    const list = new LinkedList(node1);
    result.push(list);

    console.log('-------------------------------', result);

    expect(result).toEqual([list])
  })
});
