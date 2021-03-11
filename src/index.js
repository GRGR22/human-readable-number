module.exports = function toReadable (number) {
    let mainStr = '';
    let z = 0
    let small = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen","sixteen","seventeen", "eighteen", "nineteen"];
    let big = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (number == 0) return 'zero'
      if (number >= 100) {
        z = Math.floor(number/100);
        number-=z*100;
        mainStr+=small[z-1] + " hundred"
        if (number > 0) mainStr+=" "
      }
      
      if (number < 100 && number >= 20) {
        z = Math.floor(number/10);
        number-=z*10;
        mainStr+=big[z-2]
        if (number > 0) mainStr+=" "
      }
      
      if (number < 20 && number > 0) mainStr +=small[number-1];

  return mainStr
}
