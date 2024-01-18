//o código abaixo roda no site playcode.io/javascript

class hero {
    constructor(heroName, heroAge, heroType){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
    }
}

let nome = "";
while(nome === ""){
nome = prompt("Qual é o nome do seu heroi? (Digite o nome)");
}

let idade = "";
while(idade === ""){
idade = prompt("Qual é a idade do seu heroi? (Digite a idade)");
}

let tipo = "";
while(tipo === ""){
tipo = prompt("Qual é o tipo do seu heroi? (Digite o tipo)");
}

let saida = new hero (nome, idade, tipo)
console.log(saida)

let ataque = ""

if (tipo == "mago"){
ataque = "magia"
}else if(tipo == "guerreiro"){
ataque = "espada"
}else if(tipo == "monge"){
ataque = "artes marciais"
}else {
ataque = "shuriken"
}
        
console.log(`O ${tipo} atacou usando ${ataque}.`)