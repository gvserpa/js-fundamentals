/*

Create an array variable called shoppingList containing 5 grocery items. Display:

The first item

The last item

The total number of items

Whether the item "milk" is in the list

*/

const shoppingList = ['bread', 'eggs', 'milk', 'cheese', 'butter']


console.log(shoppingList[0])
console.log(shoppingList[shoppingList.length - 1])
console.log(shoppingList.length)
console.log(shoppingList.includes('milk'))