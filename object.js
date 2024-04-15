// const obj = { a: 1, b: 2 };
// console.log(obj.hasOwnProperty('a')); // Output: true
// console.log(obj.hasOwnProperty('toString')); // Output: false (inherited from Object.prototype)


// const obj = {
//     prop: 42,
//   };
  
//   Object.freeze(obj);
  
//   obj.prop = 33;
//   // Throws an error in strict mode
  
//   console.log(obj);
//   // Expected output: 42

// const obj = {
//     name: 'John',
//     age: 30
// };

// const descriptor = Object.getOwnPropertyDescriptor(obj.age);

// console.log(descriptor);

// const object1 = {
//     1: "b",
//     2:"c",
//     3: "a"
//   };
  
//   console.log(Object.getOwnPropertyNames(object1));
//   // Expected output: Array ["a", "b", "c"]

// Object.prototype.groupBy = function(keyGetter) {
//   return this.reduce((result, item) => {
//     const key = keyGetter(item);
//     result[key] = result[key] || [];
//     result[key].push(item);
//     return result;
//   }, {});
// };

// Example usage:
// const items = [
//   { name: 'apple', category: 'fruit' },
//   { name: 'banana', category: 'fruit' },
//   { name: 'carrot', category: 'vegetable' },
//   { name: 'orange', category: 'fruit' }
// ];

// const groupedItems = Object.groupBy(items,item => item.category);
// console.log(groupedItems);


const obj = {
  prop1: 42,
  prop2: 'Hello'
};

//console.log(Object.freeze(obj)); // false

Object.freeze(obj);

console.log(Object.isFrozen(obj)); // true

// // Try to modify an existing property
obj.prop1 = 100; // Attempted change will not take effect

// Try to add a new property
obj.prop3 = true; // Attempted addition will not take effect

console.log(obj); // { prop1: 42, prop2: 'Hello' }

// Try to delete an existing property
delete obj.prop1; // Attempted deletion will not take effect

//console.log(obj); // { prop1: 42, prop2: 'Hello' }


  
