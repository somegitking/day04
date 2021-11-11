function piggysave(){

    let total = 0 //클로져
    return function add(money){
        total += money
        console.log(total)

    }
}

const p1 = piggysave()
p1(100)
p1(100)
p1(100)
console.log(p1)

const p2 = piggysave()
p2(100)
p2(100)
p2(100)


// function add(){
//     return 100
// }
//
// console.log(add())