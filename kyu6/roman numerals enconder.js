let number = 1990;
function solution(number){
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 };
    var ans = '';
  while(number>0){
      for(i in roman){ 
          if(roman[i]<=number){ ans += i; number-=roman[i]; break;}
          
      }
  }
  return ans;
  }
