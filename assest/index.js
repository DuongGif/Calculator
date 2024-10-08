const display = document.getElementById("display");
var result = 0 ;
function appendToDisplay(input){
    display.value += input;
}

function cleanDisplay(){
    display.value ="";
}

function TinhToan(){
    try{
        display.value = eval(display.value);
        result = display.value;
    }catch(error){
        display.value ="error"
    }
}