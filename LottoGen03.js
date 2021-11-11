
let LottoNos = []
let DrawCnt = 0

while(true) {

    for (let i = 0; i <= LottoNos.length ; i++) {
        let no = parseInt(Math.random()*100%45) +1

        if(no == LottoNos[i]){
            break
        }else{
            LottoNos.push(no)
            console.log(LottoNos)
        }
    }



    if (DrawCnt == 6) {
        break
    }

}