//2. 로또 번호 뽑기 프로그램 ver1


let LottoNos = []
let LottoSave = []
let LottoCnt = 0

for (let i = 0; i < 45 ; i++) {
    LottoNos[i] = i +1
}
//console.log(LottoNos)

for (let i = 0; i < 6 ; i++) {
    let no = parseInt(Math.random() * 100 ) % LottoNos.length
    LottoSave[i] = parseInt(LottoNos.splice(no, 1))


}
process.stdout.write(`You draw these Nos.: `)
console.log(LottoSave)

process.stdout.write(`Sort: `)
LottoSave.sort((a, b) => {
   return a-b
});
console.log(LottoSave)


//45까 찍힘 -> 삭제되지 않음 ->

