//시침의 각도 구하는 함수
function calcTotal(hourValue, minValue){

    function calcHour(hour){
        const result  =  (360 / 12 ) * (hour % 12)
        return result

    }
//분침의 각도 구하는 함수 화살표 함수
    const calcMin = min => (360/60) * min

    // console.log(calcHour(12))
    // console.log(calcMin(38))

//분침에 시침의 이동 각도를 구하는 함수
    function getExtra(min){
        return (calcHour(hourValue) + getExtra(minValue) -calcMin(minValue))
    }


}
console.log(calcTotal(12, 38))

// let huor = 12
// let min = 4
//
// let degree =calcMin(min) - calcHour(huor) -getExtra(min)
// console.log(`시침과 분침 사이 각도는 ${degree} 입니다`)