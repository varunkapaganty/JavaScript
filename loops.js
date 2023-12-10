//for loop

let i = 10

for (i = 0; i<=10; i++) {
    console.log('Value if i is' +i)
}

// for in loops

let fruits = ['Apple', 'Orange', 'Lemon']

let x
for(x in fruits){
    console.log(x)
    console.log(fruits[x])
}


//for of loops
for(x of fruits){
    console.log(x)
    console.log(fruits[x])
}