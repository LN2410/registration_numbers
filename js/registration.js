
function registrationF(stored){
  var regNumber = '';
  var city = stored || {};


  function addRegNum(reg){
   var regNumbers = [ 'CA ', 'GP ', 'L ']

    if (reg !== ''){
      if (city[reg] === undefined) {
        for (var i = 0; i < regNumbers.length; i++) {
          if (reg.startsWith(regNumbers[i])) {
            city[reg] = 0;
            return true;
          }
        }
      }
      return false;
    }
  }

  function returnsRegNum(){
    return regNumber;
  }
    function theTown(cities){
    var regNum = Object.keys(city);

    if (town === "Filter ") {
   var empty = regNum.clear();
     return empty;
  }
      if (town === "All ") {
      return regNum;
     }

  var cityFilter = regNum.filter(function(Number, storedNum){

      return Number.startsWith(town)
    });
    location.hash = city;

    return cityFilter;
  }
  function retunMap() {
    return city;
  }

 return {
    addRegNum,
    returnsRegNum,
    theTown,
    retunMap,

  }
}
