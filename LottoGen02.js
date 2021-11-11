
let LottoNos = []
let DrawCnt = 0

LottoGen()

function LottoGen(){

    while(true){

        if(DrawCnt == 6){
            break


        }else{
            let no = parseInt(Math.random()*100%45) +1
            if(LottoNos.includes(no)){
                continue
            }else {
                LottoNos.push(no)
                DrawCnt++
            }
        }
    }
    console.log(LottoNos)
    LottoNos.sort((a,b) =>{
        return a-b
    });
    console.log(LottoNos)

}

