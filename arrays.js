let numbers = [1,2,3,4,5]

let fruits = ['orange','mixed', 'plum']
console.log(fruits)

let cars = new Array('car1','car2','car3')

//remove from last index
fruits.pop()
console.log(fruits)

//remove from 1st index
fruits.shift()
console.log(fruits)

// will add value at end
fruits.push('greapes')
console.log(fruits)

//will add value at first
fruits.unshift('guava')
console.log(fruits)

//delete the value but index wont be removed
delete(fruits[1])
console.log(fruits)

//we can add value at the given index
fruits[1] = 'orange'
console.log(fruits)

//splice function used to remove the value and clear the index
fruits.splice(1,2)
console.log(fruits)

//splice function to add values to the array
fruits.splice(2,0, 'orange','cherry')
console.log(fruits)

//we can create the new array
let citfruits = fruits.slice(0,2)
console.log(fruits)
console.log(citfruits)

//concat function to merge to arrays
let concatfruits = fruits.concat(citfruits)
console.log(concatfruits) 

let enumb = [2,4,6]
let onum = [1,3,5]
let mnum = [1,2,4,5,6,7,8]

let allnumbers = enumb.concat(onum,mnum,concatfruits)
console.log(allnumbers)

