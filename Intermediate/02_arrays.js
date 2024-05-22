const mars = ["red","stone","poison"];
const earth = ["blue","water","alive"];

// mars.push(earth);
// console.log(mars);

// const arr = earth.concat(mars);
// console.log(arr);
// console.log(earth);

// spread operator
const all = [...mars, ...earth];
// console.log(all);

const arr1 = [1,2,3,[2,3,4],4,[22,33,[3,2]]];
const arr2 = arr1.flat(Infinity);
console.log(arr2);