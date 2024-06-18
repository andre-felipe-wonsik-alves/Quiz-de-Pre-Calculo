let options = [2, 3, 1];
let resposta = 2;

const arrPerguntas = ["1+1", "2^3", "2/2"];
const arrRespostas = [2, 8, 1];

const hpMonstro = 5;
const hpPlayer = 3;
let hitsPlayer = 1;
let hitsMonstro = 1;

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

// recebe o index vindo do botão (0, 1 ou 2) que seria correspondente ao index da opção no array
function checarResposta(button) {
  if (options[button] == resposta) return novaQuestao();
  hitPlayer();
}

// -------------------------- SIGMA
function novaQuestao() {
  hitMonstro()
  //da um hit no monstro e dps chama
}

// -------------------------- ANDREZAO
function hitPlayer() {
  if(hitsPlayer >= hpPlayer) return false;

  document.querySelector("#hp_player").innerHTML = "❤".repeat(hpPlayer - hitsPlayer);
  hitsPlayer++;
}

// -------------------------- ANDREZAO
function hitMonstro() {
  if(hitsMonstro >= hpMonstro) return false; //TROCAR O MONSTRO

  document.querySelector("#hp_monstro").innerHTML = "❤".repeat(hpMonstro - hitsMonstro);
  hitsMonstro++;
}

//coloca as opções nos botões
//futuramente colocar dinamicamente a pergunta para não ser sempre a mesma
// -------------------------- CLEBER
function init() {
  document.getElementById("conta").innerHTML = arrPerguntas[2];

  // Vidas
  document.querySelector("#hp_monstro").innerHTML = "❤".repeat(hpMonstro);
  document.querySelector("#hp_player").innerHTML = "❤".repeat(hpPlayer);

  for (let i = 0; i < 3; i++) {
    let alterando = "botao" + i.toString();
    document.getElementById(alterando).innerHTML = options[i];
  }
}
