function createPhoneNumber(numbers){
  
    var phoneNumber = numbers.toString();
    phoneNumber = phoneNumber.replace(/,/g,"");
    var areacode = phoneNumber.substring(0, 3);
    var firstThreeDigits = phoneNumber.substring(3, 6);
    var lastFourDigits = phoneNumber.substring(6, 10);
    
   return '(' + areacode + ') ' + firstThreeDigits + '-' + lastFourDigits;
  }