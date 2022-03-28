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
    const list =  new LinkedList();

    list.insert(14);
    list.insert(15);
    list.insert(90);
    list.insert(20);

    expect(list.head.value).toEqual(14);
    expect(list.head.next.value).toEqual(15);
    expect(list.head.next.next.value).toEqual(90);
    expect(list.head.next.next.next.value).toEqual(20);
  });

  it('Will return true when finding a value within the linked list that exists', () => {   
    const list = new LinkedList();

    list.insert(18);
    list.insert(30);

    const result = list.includes(30);
    expect(result).toEqual(true);

  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();

    list.insert(15);
    list.insert(40);
    list.insert(45);

    const result = list.includes(42);
    expect(result).toEqual(false)
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const result = [];
    const list = new LinkedList();

    list.insert(35);
    list.insert(45);
    list.insert(13);
    list.insert(9);
    list.insert(23);

    result.push(list);;

    expect(result).toEqual([list])
  })

  it('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();

    list.insert(30);
    list.insert(45);

    list.append(16);

    expect(list.head.value).toEqual(30);
    expect(list.head.next.next.value).toEqual(16);
  })

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    
    list.insert(15);
    list.insert(20);
    
    list.append(21);
    list.append(30);
    list.append(45);

    expect(list.head.value).toEqual(15);
    expect(list.head.next.next.value).toEqual(21);
    expect(list.head.next.next.next.value).toEqual(30);
    expect(list.head.next.next.next.next.value).toEqual(45);
  })

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();

    list.insert(15);
    list.insert(20);
    list.insertBefore(20, 18);
    
    expect(list.head.value).toEqual(15);
    expect(list.head.next.value).toEqual(18);
    expect(list.head.next.next.value).toEqual(20);
  })

  it('Can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();

    list.insert(15);
    list.insert(25);

    list.insertBefore(15, 80);

    expect(list.head.value).toEqual(80);
    expect(list.head.next.value).toEqual(15);
  })

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();

    list.insert(12);
    list.insert(15);
    list.insert(14);

    list.insertAfter(15, 30);

    expect(list.head.value).toEqual(12);
    expect(list.head.next.value).toEqual(15);
    expect(list.head.next.next.value).toEqual(30);
    expect(list.head.next.next.next.value).toEqual(14);
  })

  it('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();

    list.insert(14);
    list.insert(45);

    list.insertAfter(45, 15);

    expect(list.head.value).toEqual(14);
    expect(list.head.next.value).toEqual(45);
    expect(list.head.next.next.value).toEqual(15);
  })
});
