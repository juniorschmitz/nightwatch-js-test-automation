// var fruits = new Array();

var fruits = ['banana', 'strawberry', 'watermelon']

console.log(fruits)

fruits.push('Orange')

console.log(fruits)

fruits.push('tomato')

// fruits.pop(); // removes last element
// fruits.flush(); // removes first element

var index = fruits.indexOf('tomato')
fruits.splice(index) // removes index

console.log(fruits)

var potatoes = ['potato1', 'potato2']

var result = fruits.concat(potatoes)

console.log(result)