function turnOff(){
    var x=document.getElementById("values")
    x.style.visibility="hidden"
}
function turnOn(){
    var x=document.getElementById("values")
    x.style.visibility="visible"
}
function getvalues(num){
    var x=document.getElementById("values")
    x.value = x.value+num
}
function clear() {
    // Assuming your input field has an id of 'calculatedInput'
    var inputField = document.getElementById('values');
    if (inputField) {
      inputField.value = '0';
    }
  }