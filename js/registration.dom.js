//refereence the dom elements
var regElement = document.querySelector('.regtext');
var addBtnElem = document.querySelector('.addingBtn');
var resetBtnElement = document.querySelector('.resetBtn');
var selectTown = document.querySelector('.DropSelector');
var displayElement = document.querySelector('.display');
//
var regReferences = localStorage.getItem('numberOfReg');
var stored = regReferences ? JSON.parse(regReferences) : {};

//instance of the factoryFunction from the logic file
var regFactory = registrationF(stored)
var collectReg = stored;

function regCreated(reg) {
  var theList = document.createElement('li');
  theList.textContent = reg;
  displayElement.appendChild(theList);
}


function regDisplay() {
  var theValue = regElement.value.trim().toUpperCase();
  regElement.value = '';
   // console.log(inputValue);


   var allCars = /[a-zA-Z0-9]+$/;
  if(!theValue.match(allCars) && theValue !== ""){
    if(collectReg[theValue] === undefined){
      collectReg[`theValue`] = 0;
     }
}
if (regFactory.addedNumbers(theValue)) {
    document.querySelector('.alert').innerHTML = '';
    localStorage.setItem('numberOfReg', JSON.stringify(regFactory.mapRegistry()));
    createReg(theValue);
}
      else {
        let enteredReg = Object.keys(regFactory.mapRegistry());

         enteredReg.indexOf(theValue) !=-1 ?   document.querySelector('.alert').innerHTML = "This Registration number already exists"   :  document.querySelector('.alert').innerHTML = "Please enter a valid registration <br> <code> Only from: 'CA, CY, CW, CJ & CAW'."

      }
      addBtnElem.addEventListener('click', function(){
        regDisplay();
      });

      clearButton.addEventListener('click', function(){
      localStorage.removeItem('numberOfReg');
      document.querySelector('.alert').innerHTML = '';
      window.location.reload();
      })

      window.addEventListener('load', function(){
        var loadMap = Object.keys(regFactory.mapRegistry());
        console.log(loadMap);
       for (var i = 0; i < loadMap.length; i++) {
          createReg(loadMap[i])
        }
      });

      townSelect.addEventListener('change', function(){
      displayElem.innerHTML = '';
        var selectValue = callFactory.townFilter(townSelect.value);

        if (selectValue.length > 0) {
          for (var i = 0; i < selectValue.length; i++) {
            createReg(selectValue[i]);
          }
          document.querySelector('.alert').innerHTML = '';
        }


      });

      regElement.addEventListener('click', function(){
        document.querySelector('.alert').innerHTML = '';
      });


}
