

const bufferOne = Buffer.alloc(10); // allocat 10 byte
console.log(bufferOne);

const bufferFromString = Buffer.from("shashi");

console.log(bufferFromString);

const bufferFromArray = Buffer.from([1, 2, 3, 4, 5, 6, 10]);

console.log(bufferFromArray);

bufferOne.write("shashi")

console.log(bufferOne.toString());

console.log(bufferOne.toJSON());




