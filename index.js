console.log("Digite o nome do herói");
let nome = "Edson";

console.log("Digite a quantidade de experiência do herói");
let exp = 9500;
let brasao;

if (exp <1000){
    brasao = "Ferro"
  }
  if (exp > 1000 && exp <= 2000){
    brasao = "Bronze";
  }
  if (exp > 2000 && exp <= 5000){
    brasao = "Prata";
  }
  if (exp > 5000 && exp <= 7000){
    brasao = "Ouro";
  }
  if (exp > 7000 && exp <= 8000){
    brasao = "Platina";
  }
  if (exp > 8000 && exp <= 9000){
    brasao = "Ascendente";
  }
  if (exp > 9000 && exp <= 10000){
    brasao = "Imortal";
  }
  if (exp > 10000){
    brasao = "Radiante";
  }


console.log("O Herói de nome " + nome + " está no nível de " + brasao);