'use strict';

const LinkedList = require('../linkedList.js');
// const Node = require('../node.js');

describe('Testing LinkedList methods', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  //Code Challenge set 1 Class 06
  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });
  it('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert('THIS VALUE');
    expect(list.head.value).toBe('THIS VALUE');
  });
  it('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
    console.log('Should be head be', list.head);
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert((10), (5));
    expect(list.head.value).toBe((10), (5));
    console.log('New Nodes should be', list);
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.toString(list.length);
    expect(list.value).toBeTruthy();
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.toString(list.length);
    expect(list.value).toBeFalsy();
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    // list.length =
    expect(list.length).toEqual();
    console.log('values of list should be', list.length);
  });

  //Code Challenge set 2 Class 06
  it('Can successfully add a node to the end of the linked list', () => {

  });

});

