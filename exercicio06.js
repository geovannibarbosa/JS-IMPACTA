let num1 = 10;
let num2 = 20;
let selecao = 1;
let resultado = null;

switch(selecao){
    case 1:
        resultado = num1 + num2;
        break;
    
    case 2:
        resultado = num1 * num2;
        break;

    case 3:
        resultado = num1 / num2;
        break;

    default:
        console.log("Valor de seleção inválido!");
        break;
};

if(resultado){
    console.log('O resultado da sua operação é: ' + resultado.toFixed(2));
};