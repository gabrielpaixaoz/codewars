let iterable = [1,2,2,3,3]

console.log(iterable.indexOf(iterable))

var uniqueInOrder=function(iterable){
    if(iterable.indexOf(iterable) === -1){
        return iterable.filter((item,index) => index === 0 || item !== iterable[index - 1])
    }
    else{
        return iterable.split('').filter((item,index) => index === 0 || item !== iterable[index - 1])
    }
  }


  console.log(uniqueInOrder(iterable)) 