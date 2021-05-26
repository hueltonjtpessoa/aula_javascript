/*
var nome = "Huelton Pessoa";
var idade = 33;
var idade2 = 10;
var frase = "Espanha é o melhor país do mundo";
alert (nome + " tem " + idade + " anos");
alert (idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Espanha", "Holanda"));
alert(frase.replace("Espanha", "Holanda"));
console.log(frase.toLocaleUpperCase())
console.log(frase.toLowerCase());
var n1 = 10;
var n2 = 5;
console.log(n1 * n2);*/

/*
var lista = ["maça", "pêra", "laranja"];
//lista.pop();
//lista.push("uva");
console.log(lista);
//console.log(lista. reverse());
//console.log(lista.length);
console.log(lista.toString());
console.log(lista.join( " - "))
*/

/*
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var idade = prompt("Qual é a sua Idade?");
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");    
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count)
    count++;
};
*/

/*
var count;
for (count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var d = new Date();
    //alert(d);
    //alert(d.getMonth()+1);
    alert(d.getDay());
    alert(d.getMinutes());
*/

/*
function soma (n1, n2){
    return n1 + n2;
}
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
*/

//alert (soma(5, 10));
//alert (setReplace("Vai Espanha", "Espanha", "Holanda"));

/*var validar = 0;  //variável global

function validadaIdade(idade){
    //var validar; variável local
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual é a sua idade?");
//console.log(validadaIdade(idade));
validadaIdade(idade) 
console.log(validar); //variável global
*/

function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>"; //injetando um html
    //console.log(document.getElementById("agradecimento"));

    // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open ("https://www.linkedin.com/in/hueltonjtpessoa/"); //abre em uma nova janela.
    //window.location.href = "https://www.linkedin.com/in/hueltonjtpessoa/"; //abre na mesma aba e substitui o autal site
}


function trocar(elemento){
    //document.getElementById("mousemove"). innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por Passar o Mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove"). innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o Mouse Aqui";

}

function load(){
    alert("Página Carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}