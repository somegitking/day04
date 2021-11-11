const read = require('readline-sync')

//1. 원하는 만큼 숫자 출력
function printAsYouWant(num){
    for (let i = 0; i < num ; i++) {
        //console.log(i)
        process.stdout.write(`${i}`)
    }


}
let num = read.question(`Enter No.: `)

console.log(`You entered ${num}`)

printAsYouWant(num)

