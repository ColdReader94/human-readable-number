module.exports = function toReadable (number) {    
    let string = number.toString();
    let output = [];
    // до 20
    let numberArr = {0: 'null', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: "eight", 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelv', 13: 'thirdteen', 14: 'fourteen', 15: 'fiveteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
   //десятки от 20
   let numberArr2 = { 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'};

   if(number < 19) {
    output.push(numberArr[number]);
   }

    if(number > 19 && number < 100) {
       let tens = number % 10;
        let ones = number - (tens * 10);
        output.push(numberArr2[tens]);        
        output.push(numberArr[ones]);
    }
    
    if(number > 100) {
        let hundreds = number % 100;
        let tensMore = number - (hundreds * 100);
        let tens = tensMore % 10;
        let ones = tensMore - (tens * 10);
        output.push(numberArr[hundreds]);
        output.push('hundred');
        output.push(numberArr2[tens]);
        output.push(numberArr[ones]);
     }

     
     return output.join(' ');
}
    
