let numbers = [19, 5, 42, 2, 77]
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    let soma = numbers[0] + numbers[1]
    return soma
  }

  console.log(sumTwoSmallestNumbers(numbers))