'use strict';

const LinkedList = require('../linkedList.js');
// const Node = require('../node.js');

describe('Testing LinkedList methods', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('should create an empty linked list on instantiation', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });
  it('should properly insert into the linked list at head', () => {
    const list = new LinkedList();
    list.insert('THIS VALUE');
    expect(list.head.value).toBe('THIS VALUE');
  });
});

