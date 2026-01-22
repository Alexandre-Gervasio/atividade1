let nome = "Elyndor Thalanis";
let xpTotal = 1200;
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
else if(xpTotal > 9000 && xpTotal < 10000){
    nivel = "Imortal"
}
else{xpTotal >= 10000
    nivel = "Radiante"
}

switch (xpTotal) {
    case 1:
        nivel = "Ferro"
        break;
    case 2:
        nivel = "Bronze"
        break;
    case 3:
        nivel = "Prata"
        break;
    case 4:
        nivel = "Ouro"
        break;
    case 5:
        nivel = "Platina"
        break;
    case 6:
        nivel = "Ascendente"
        break;
    case 7:
        nivel = "Imortal"
        break;
    case 8:
        nivel = "Radiante"
        break;
    default:
        console.log("Nível desconhecido");
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel);