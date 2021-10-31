function Node(data, next) {
  this.data = data;
  this.next = next;
}

// function linkedListZip(list1, list2){
//   let list3 = new Node(null, null);
//   let prev = list3;

//   while(list1 !== null && list2 !== null) {
//     if(list1.value <= list2.value){
//       prev.next = list1;
//       list1 = list1.next;
//     } else {
//       prev.next = list2;
//       list2 = list2.next;
//     }
//     prev = prev.next;
//   }
//   if(list1 === null) { prev.next = list2; }
//   if(list2 === null) { prev.next = list1; }

//   return list3.next;
// }


let n5 = new Node(6, null);
let n4 = new Node(15, n5);
let n3 = new Node(20, n4);
let n2 = new Node(3, n3);
let n1 = new Node(4, n2);
let list1 = n1;

let n10 = new Node(10, null);
let n9 = new Node(1, n10);
let n8 = new Node(6, n9);
let n7 = new Node(9, n8);
let n6 = new Node(7, n7);
let list2 = n6;

console.log(linkedListZip(list1, list2));

