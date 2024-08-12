
let text = "The sunset sets at twelve o' clock."

var result = "";
for (var i = 0; i < text.length; i++){
  var code = text.toUpperCase().charCodeAt(i)
  console.log(code)
  if (code > 64 && code < 91) result += (code - 64) + " ";
}


console.log(result)