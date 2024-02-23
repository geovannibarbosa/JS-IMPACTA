let disciplina = 'História';
let nota1 = 9;
let nota2 = 8;
let nota3 = 10;
let nomeAluno = 'Geovanni';
let media = (nota1 + nota2 + nota3) / 3;

if(media >= 8){
    console.log('O aluno ' + nomeAluno + ' foi APROVADO!\nSua nota final foi ' + media.toFixed(1));
}else{
    console.log('O aluno ' + nomeAluno + ' foi REPROVADO!\nSua nota final foi ' + media.toFixed(1));
};