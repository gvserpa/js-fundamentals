/* 

Use for or forEach() to display each fruit in the array with the phrase:
"I like [fruit]".

*/

// const fruits = ['orange', 'apple', 'banana', 'watermelon'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`I like ${fruits[i]}`)
// }

const fruits = ['orange', 'apple', 'banana', 'watermelon'];

fruits.forEach(fruit => {
    console.log(`I like ${fruit}`)
})