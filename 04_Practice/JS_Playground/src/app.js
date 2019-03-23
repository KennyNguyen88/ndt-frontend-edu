const cats = ['Bob', 'Willy', 'Mini'];
const printArray = (items)  => {
    items.map((item,index) => console.log(index, item));
}
//pop: Remove an item from the end of an array
//Returns the removed item.
const demo_pop = (arr) => {   
    let cats_pop = arr.slice();
    console.log('Original');
    printArray(cats_pop);    
    let popItem= cats_pop.pop();    
    console.log("popItem", popItem);    
    console.log("After pop");
    printArray(cats_pop);    
}
demo_pop(cats);

//push: Add items to the end of an array
//Returns the new array length
const demo_push = (arr) => {
    let cats_push = arr.slice();
    console.log('Original');
    printArray(cats_push);    
    let lengthAfterPush = cats_push.push("pushItem");
    console.log('lengthAfterpush', lengthAfterPush);
    console.log("After push");
    printArray(cats_push);
}
demo_push(cats);
/*


//shift: Remove an item from the beginning of an array
//Returns the removed item
let shiftItem = cats.shift();
console.log("shiftItem", shiftItem);
console.log("shift", cats);

//unshift: Add items to the beginning of an array
//Returns the new array length
let lengthAfterUnshift = cats.unshift("unshift");
console.log("unshift",cats);

//join: join all elements of an array with separator
//Returns new string
let separator = ",";
let joinArray = cats.join(separator);
console.log("join", joinArray);

//concat: merge 2 array
//Returns new array
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'a', 'f'];
let arr3 = arr1.concat(arr2);
console.log("concat",arr3);

//indexOf: returns the first index (>=0) which given element can be found or -1 if cannot
let ia = arr3.indexOf("a");
console.log("indexOf a", ia);
let ie = arr3.indexOf("e");
console.log("indexOf e", ie);

//foreach
//no return
//cannot break out the loop
const queues = [1,2,3,4,5];
queues.forEach((queue,index) => {
    console.log(queue + " => " + index);
})

//for...in
//use with object properties
//no return
//cannot break out the loop
var obj = {a: 1, b: 2, c: 3};
for (let prop in obj) {
console.log(`obj.${prop} = ${obj[prop]}`);
}

//filter
//return new array

let filter2 = queues.filter(queue => {
    if (queue !== 2){
        return true;
    }
    return false;
})
console.log("filter",filter2);

let filter1 = queues.filter(queue => queue == 1);
console.log("filter",filter1);

//map: transform array
//return new array

let mapArray = queues.map(queue => {return ("'" + queue + "'")});
console.log("map",mapArray);


//reduce
//return only 1 value

let total = queues.reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
});

console.log("reduce", total);
*/