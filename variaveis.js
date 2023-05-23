// ⇨ declare uma nova variável chamada cliente que recebe “Alcides Garcia”;
// ⇨ declare uma nova variável chamada conta que recebe 67768734;
// ⇨ declare uma nova variável chamada saldo que recebe 322.95;
var cliente = 'Alcides Garcia'
var conta = 67768734
var saldo = 322.95

// exiba as mensagens “Cliente: <cliente>”, “conta: <conta>”, “saldo: <saldo>”,
// pulando linha entre cada uma e incluindo as variáveis quando necessário;
console.log('Cliente: ' + cliente + '.\nConta: ' + conta + '.\nSaldo: ' + saldo )

// declare uma nova variável chamada depósito que recebe 50.00;
var deposito = 50.00

// atribua ao saldo o saldo atual + deposito;
saldo = deposito + saldo

// exiba a mensagem: “Novo depósito na conta <conta>. Saldo atualizado: <saldo>;
console.log('Novo depósito na conta: ' + conta +  '.\nSaldo atualizado: ' + saldo)

// verifique o tipo de cada uma das variáveis criadas com type e a ajuda do console;
console.log('O tipo da variavel cliente é: ' + typeof  cliente)
console.log('O tipo da variavel conta é: ' + typeof  conta)
console.log('O tipo da variavel saldo é: ' + typeof  saldo)

// responda: O que acontece quando somamos uma string e um number?
console.log("O que acontece quando somamos uma string e um number?" + "\nR: vira uma String.")

