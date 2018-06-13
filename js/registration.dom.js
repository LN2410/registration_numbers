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

function regCreated(reg) {
  var theList = document.createElement('li');
  theList.textContent = reg;
  displayElement.appendChild(theList);
}


function regDisplay() {
  
}
