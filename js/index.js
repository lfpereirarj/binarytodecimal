$(document).ready(function(){
  var inputBinary = $('#binary');
  var inputDecimal = $('#decimal');

  //pegar os valores dos inputs;

  var getBinaryValue = function(){
    return inputBinary.val();
  }

  var setBinaryValue = function(binaryValue) {
    inputBinary.val(binaryValue);
  }

  var getDecimalValue = function(){
    return inputBinary.val();
  }

  var setDecimalValue = function(decimalValue) {
    inputDecimal.val(decimalValue);
  }

  var convertStringToArray = function(string){
    return string.split('');
  }
  var convertBinaryToDecimal = function(binaryNumber){
    var binaryArray = convertStringToArray(binaryNumber);
    var decimalNumber = 0;
    binaryArray.forEach(number => {
      number = parseInt(number);
      decimalNumber = decimalNumber * 2 + number;
    });

    setDecimalValue(decimalNumber);
  }

  inputBinary.on('keyup', function(){
    convertBinaryToDecimal(getBinaryValue())
  });
})