let nome = "Elyndor Thalanis";
let xpTotal = 800;
let nivel

if(xpTotal <= 1000){
    nivel = "Ferro"
}
else if(xpTotal > 1000 && xpTotal <= 2000){
    nivel = "Bronze"
}
else if(xpTotal > 2000 && xpTotal <= 5000){
    nivel = "Prata"
}
else if(xpTotal > 5000 && xpTotal <= 7000){
    nivel = "Ouro"
}
else if(xpTotal > 7000 && xpTotal <= 8000){
    nivel = "Platina"
}
else if(xpTotal > 8000 && xpTotal <= 9000){
    nivel = "Ascendente"
}
else if(xpTotal > 9000 && xpTotal <= 10000){
    nivel = "Imortal"
}
else if(xpTotal > 10000){
    nivel = "Radiante"
}

console.log("Olá, " + nome + "!");
console.log("Seu nível atual é: " + nivel + "." + " Você possui " + xpTotal + " pontos de XP.");

for(let i = 1; i <= 1; i++){
    xpTotal += 250;
    console.log("------------------------------------------------------------------------------------------------------");
    console.log("Parabéns, " + nome + "! Você ganhou 250 pontos de XP ao derrotar o boss desse andar do jogo " + i + "!");
}
switch (true) {
    case xpTotal <= 1000:
        nivel = "Ferro";
        break;
    case xpTotal > 1000 && xpTotal <= 2000:
        nivel = "Bronze";
        break;
    case xpTotal > 2000 && xpTotal <= 5000:
        nivel = "Prata";
        break;
    case xpTotal > 5000 && xpTotal <= 7000:
        nivel = "Ouro";
        break;
    case xpTotal > 7000 && xpTotal <= 8000:
        nivel = "Platina";
        break;
    case xpTotal > 8000 && xpTotal <= 9000:
        nivel = "Ascendente";
        break;
    case xpTotal > 9000 && xpTotal <= 10000:
        nivel = "Imortal";
        break;
    case xpTotal > 10000:
        nivel = "Radiante";
        break;
    default:
        nivel = "Desconhecido";
        break;
}
// Regras de nível comentadas abaixo caso queira utilizar if/else ao invés de switch
// if(xpTotal <= 1000){
//     nivel = "Ferro"
// }
// else if(xpTotal > 1000 && xpTotal <= 2000){
//     nivel = "Bronze"
// }
// else if(xpTotal > 2000 && xpTotal <= 5000){
//     nivel = "Prata"
// }
// else if(xpTotal > 5000 && xpTotal <= 7000){
//     nivel = "Ouro"
// }
// else if(xpTotal > 7000 && xpTotal <= 8000){
//     nivel = "Platina"
// }
// else if(xpTotal > 8000 && xpTotal <= 9000){
//     nivel = "Ascendente"
// }
// else if(xpTotal > 9000 && xpTotal <= 10000){
//     nivel = "Imortal"
// }
// else if(xpTotal > 10000){
//     nivel = "Radiante"
// }
// Fim das regras de nível

console.log("Você herói " + nome + " está no nível " + nivel + "!" +  " Com " + xpTotal + " pontos de XP.");