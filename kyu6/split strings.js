let str = ''
let s = 'ab'
function solution(str){
    if(str.length === 0){
        return []
    }
    else{
        let newstr = str.match(new RegExp(`.{1,2}`,'g'))
        let loopstr = newstr.map(item => {
            if(item.length === 1){
                 return item + '_'
            }
            else{
                return item
            }
        })
        return loopstr
    }
    
}

console.log(solution(str))

function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}

console.log(solution(s))