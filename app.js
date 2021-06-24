let array=[7,28,35,18,9,71,83,45];
let array1=[7,28,35,18,9,71,83,45];
 console.log(`Max:${Math.max(...array)}`);
 console.log(`Min:${Math.min(...array)}`);
 var b=(array===array1);
 console.log(b);
 

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

arrayEquals(a, b); // false
arrayEquals(a, c); 
 