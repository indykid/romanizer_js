var UserInterface = {
  arabicInput: "[data-arabic]",
  romanizeTrigger: "[data-romanizer]",
  resultOutput: "[data-result]"
};

UserInterface.setup = function(romanizer) {

  var parseArabic = function(text) {
    return parseInt(text);
  };

  var captureValue = function(selector){
    var value = $(selector).val();
    return parseArabic(value);
  };

  var updateResult = function(resultValue){
    $(UserInterface.resultOutput).text(resultValue);
  };

  var convertArabic = function(){
    var arabic = captureValue(UserInterface.arabicInput);
    var roman = romanizer.convert(arabic);
    updateResult(roman);
  };

  var registerRomanizeListener = function(){
    $(UserInterface.romanizeTrigger).on('click', function() {
      convertArabic();
    });
  };

  registerRomanizeListener();
}
