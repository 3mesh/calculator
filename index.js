var num = "";
var number1 = 0;
var number2 = 0;
var resulte = 0;
var op ="";

$("button").click(function(){
    switch ($(this).text()) {
        case "+":
            check("+");
            break;
        case "*":
            check("*");

            break;
        case "÷":
            check("÷");

            break;
        case "-":
            check("-");

            break;
        case "=":
            
            $(".current-operand").text("");
            number2 = parseFloat(num);
            resulte = oper(number1,number2,op);
            $(".current-operand").text(resulte);
            $(".previous-operand").text("");
            number1 = resulte;
            number2 = 0;
            num ="";
            op = "";
            resulte = 0;
            //AC();
            break;
        case "AC":
            $(".previous-operand").text("");
            $(".current-operand").text("");
            AC();
            break;
        case "DEL":
            num = num.slice(0,num.length-1);
            $(".current-operand").text(num);

            break;
    
        default:
            num += $(this).text();
            $(".current-operand").text(num);
            break;
    }
    

})

function check(v){
    if(num !== "")
    number1 = parseFloat(num);
    op = v;
    num = "";
    $(".previous-operand").text(number1+" "+op);
    $(".current-operand").text("");
            
            
            

}

function AC(){
    
    num = "";
    number1 = 0;
    number2 = 0;
    resulte =0;
    op = "";
}


function oper(num1,num2,opr){
    number1 = 0;
    number2 = 0;
    switch (opr) {
        case "+":
            return num1 + num2;
            break;
        case "*":
            return num1 * num2;
        case "÷":
            return num1 / num2;
        case "-":
            return num1 - num2;
    
        default:
            break;
    }
    $(".previous-operand").text("");

}