function Calculate(){
    let result;
    let num1 = document.getElementById("FirstNum");
    let num2 = document.getElementById("SecondNum");
    let action = document.getElementById("Action");
    switch(action.value){
        case "+":
            result = +num1.value + +num2.value;
            break;
        case "-":
            result = +num1.value - +num2.value;
            break;
        case "*":
            result = +num1.value * +num2.value;
            break;
        case "/":
            result = +num1.value / +num2.value;
            break;
    }
    let string = +num1.value + " " + action.value + " " + +num2.value +" = " +  result;
   
    alert(string);
    num1.value=undefined;
    num2.value=undefined;
    action.value="+";
    
}