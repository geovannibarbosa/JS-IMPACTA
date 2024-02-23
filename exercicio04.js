let valorProduto = 250;
let numParcelas = 3;
let valorPrestacao = null;
let valorTotal = null;
let aumento = null;

switch(numParcelas){
    case 3:
        aumento = 1.10;
        break;

    case 5:
        aumento = 1.20;
        break;

    default:
        console.log('Quantidade de parcelas inválidas, escolha 3 ou 5 !!');
};

if(numParcelas == 3 || numParcelas == 5){
    valorTotal = (valorProduto * aumento);
    valorPrestacao = (valorTotal / numParcelas);
    console.log('O valor do produto se torna: ' + valorTotal.toFixed(2) + ' R$\nE o valor de cada parcela é: ' + valorPrestacao.toFixed(2) + ' R$');
};