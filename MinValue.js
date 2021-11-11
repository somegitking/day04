const read = require('readline-sync')
let arr = []
let sizeArray =read.question("How Many Arrays? ")
console.log(`Your Size: ${sizeArray}`)

for (let i = 0; i < sizeArray ; i++) {
    arr[i] = parseInt(Math.random()*100)

}
console.log(arr)

console.log(Min(arr))

function Min(arr){

    let Min = 101

    for (let i = 0; i < arr.length; i++) {
        if (Min > arr[i]){
            Min = arr[i]
        }
    }
    return Min
}