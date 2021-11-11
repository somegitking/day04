const read = require('readline-sync')
let arr = []
let sizeArray =read.question("How Many Arrays? ")
console.log(`Your Size: ${sizeArray}`)

for (let i = 0; i < sizeArray ; i++) {
    arr[i] = parseInt(Math.random()*100)

}
console.log(arr)

console.log(Max(arr))

function Max(arr){

    let Max = -1

    for (let i = 0; i < arr.length; i++) {
        if (Max < arr[i]){
            Max = arr[i]
        }


    }
    return Max

}