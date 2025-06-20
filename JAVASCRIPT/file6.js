//objects

const person = {
  name: "John",
    age: 30,
    function: function() {
        console.log("Hello, " + this.name);
    }
};
console.log(person); // Output: { name: 'John', age: 30 }
console.log(person.name); // Output: John
person.function(); // Output: Hello, John  
person.city = "New York"; // Adding a new property
delete person.age; // Deleting a property
console.log(person); // Output: New York
const keys = Object.keys(person); // Getting keys of the object
console.log(keys); // Output: ['name', 'function', 'city']  
const values = Object.values(person); // Getting values of the object
console.log(values); // Output: ['John', [Function: function], 'New York']