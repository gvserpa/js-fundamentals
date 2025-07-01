/* 

Use indexOf() to find the position of the fruit "apple" in the array. If it exists, display the index. Otherwise, display -1.

*/

const fruits = ['orange', 'apple', 'banana', 'watermelon'];

if (fruits.includes('apple')) {
    console.log(fruits.indexOf('apple'))
} else {
    console.log('-1')
}