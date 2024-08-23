const words =  "is2 Thi1s T4est 3a"

function order(words){
    let data = words.split(' ').sort((a, b)=>{return a.match(/\d/) - b.match(/\d/)}).join(' ')
    

    return data
  }

  console.log(order(words))