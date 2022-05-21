const add = function(num1, num2){
    return num1 + num2
}
const subtract = function(num1, num2){
    return num1-num2
}
const multiply = function(num1, num2){
    return num1*num2
}
const divide = function(num1, num2){
    return num1/num2
}
const operator = function(operator, num1, num2){
    if (operator = '+'){
        add(num1, num2)
    }
    else if (operator = '-'){
        subtract(num1, num2)
    }
    else if (operator = '*'){
        multiply(num1, num2)
    }
    else if (operator = '/'){
        add(num1, num2)
    }
}
