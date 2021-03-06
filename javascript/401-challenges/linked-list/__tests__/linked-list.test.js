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

  it('Where k is greater than the length of the linked list', () => {
    const list = new LinkedList();

    list.insert(1);
    list.insert(3);
    list.insert(8);
    list.insert(2);

    expect(list.kthFromEnd(6)).toEqual("6 is greather than the no. of Nodes in list");
  });

  it('Where k and the length of the list are the same', () => {
    const list = new LinkedList();

    list.insert(1);
    list.insert(3);
    list.insert(8);
    list.insert(2);

    expect(list.kthFromEnd(4)).toEqual("Node no.4 value from last is 1");
  })

  it('Where k is not a positive integer', () => {
    const list = new LinkedList();

    list.insert(1);
    list.insert(3);
    list.insert(8);
    list.insert(2);

    expect(list.kthFromEnd(-1)).toEqual();
  })

  it('Where the linked list is of a size 1', () => {
    const list = new LinkedList();

    list.insert(1);

    expect(list.kthFromEnd(2)).toEqual("2 is greather than the no. of Nodes in list")
  })

  it('???Happy Path??? where k is not at the end, but somewhere in the middle of the linked list', () => {
    const list = new LinkedList();

    list.insert(1);
    list.insert(3);
    list.insert(8);
    list.insert(2);

    expect(list.kthFromEnd(0)).toEqual()
  })
  it('Should be able to zipper two linked lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const zipped = new LinkedList();

    list1.insert(1);
    list1.insert(3);
    list1.insert(2);

    list2.insert(5);
    list2.insert(9);
    list2.insert(4);

    const zipperedList = zipped.zipLists(list1, list2)

    expect(zipperedList.head.value).toEqual(1);
    expect(zipperedList.head.next.value).toEqual(5)
    expect(zipperedList.head.next.next.value).toEqual(3);
    expect(zipperedList.head.next.next.next.value).toEqual(9);
    expect(zipperedList.head.next.next.next.next.value).toEqual(2);
    expect(zipperedList.head.next.next.next.next.next.value).toEqual(4);
    expect(zipperedList.head.next.next.next.next.next.next).toEqual(null);
  })
});
