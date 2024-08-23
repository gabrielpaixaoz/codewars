const meet =  {"tim":5,"jim":9,"randy":1,"sandy":8,"andy":2,"katie":7,"laura":1,"saajid":6,"alex":6,"john":1,"mr":0}
const boss = 'saajid'

console.log(Object.values(meet))

function outed(meet, boss){
    
    meet[boss] = meet[boss] * 2
    let score = Object.values(meet).reduce((valor, accumulator) =>{
        return valor + accumulator
    })/11
    if(score <= 5){
        return 'Get Out Now!'
    }else{
        return 'Nice Work Champ!'
    }
    
}

console.log(outed(meet,boss))




//4,727272727272727


