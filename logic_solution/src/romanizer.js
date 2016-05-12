var Romanizer = {
  arabic: [100, 90, 50, 40, 10, 9, 5, 4, 1],
  roman:  ['C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
};

Romanizer.convert = function(number) {
  var result = '',
      roman  = this.roman,
      arabic = this.arabic;

  arabic.forEach(function(arabicNumeral, index){
    while (number >= arabicNumeral) {
      result += roman[index];
      number -= arabicNumeral;
    }
  });

  return result;
};