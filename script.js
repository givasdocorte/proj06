let mensagem = "";
for (let contador = 1; contador <= 10; contador++) { 
    mensagem = `${mensagem} ${contador}`; 
}

alert(mensagem.trim());



let soma = 0;
for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));
    soma += num;



    let tab = parseInt(prompt("Digite um número para ver a tabuada:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${tab} x ${i} = ${tab * i}`);
}




let somaNotas = 0;
for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
    somaNotas += nota;
}
let media = somaNotas / 5;
console.log(`A média das notas é: ${media.toFixed(2)}`);




let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));

let inicio = Math.min(n1, n2);
let fim = Math.max(n1, n2);
let pares = [];

for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
        pares.push(i); // Adiciona o número par na lista
    }
}
console.log(`Números pares entre ${inicio} e ${fim}: ${pares.join(", ")}`);