import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1590477329022-dffe7d88c970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1590477329022-dffe7d88c970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1590477329022-dffe7d88c970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1590477329022-dffe7d88c970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1590477329022-dffe7d88c970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />
      </div>
      {/* right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries.
        </p>
        <p className="pb-6">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadown-xl">
            Book your trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SeansList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   //while loops through list, setting current at the value and newtail at value behind
//   //current. once current hits the end, its poped off into current and returned and
//   //newtail that is one spot behind is set to the new tail
//   pop() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if (length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }

//   //takes head and removes from list, return head in a variable
//   shift() {
//     if (!this.head) return undefined;
//     let tempHead = this.head;
//     this.head = tempHead.next;
//     length--;
//     return tempHead;
//   }

//   //moves new value into position of head
//   unshift(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   //gets item at index, goes through one by one with current.next
//   //adds 1 to counter to mark location to know what index youre at
//   get(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     let counter = 0;
//     let current = this.head;
//     while (counter != index) {
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }

//   // gets node at index and changes val of node
//   set(index, value) {
//     let item = this.get(index);
//     if (item) {
//       item.val = value;
//       return true;
//     }
//     return false;
//   }

//   //basicaly is like slice
//   insert(index, value) {
//     if (index < 0 || index > this.length) return false;
//     if (index === this.length) return !!this.push(value); // !! turns it into a boolean
//     // returns true instead of returning the whole list, like how push is set up to do
//     if (index === 0) {
//       this.unshift(value);
//       return true;
//       // instead of writing !!, you can write it like this so it returns true as well
//     }

//     let newNode = new Node(value);
//     let prev = this.get(index - 1);
//     let temp = prev.next;
//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }

//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();

//     let prev = this.get(index - 1);
//     let removed = prev.next;
//     prev.next = removed.next;
//     this.length--;
//     return removed;
//   }
// }
