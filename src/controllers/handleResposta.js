const arrPerguntas = [
  "1 + 1",
  "2 * 5",
  "10 - 3",
  "16 / 4",
  "3 ** 2",
  "√9",
  "5 + 7",
  "8 - 2",
  "4 * 6",
  "25 / 5",
  "2 ** 3",
  "√16",
  "9 + 8",
  "14 - 7",
  "3 * 7",
  "36 / 6",
  "5 ** 2",
  "√25",
  "6 + 2",
  "20 - 10",
  "4 * 3",
  "49 / 7",
  "2 ** 4",
  "√64",
  "7 + 3",
];

const arrRespostas = [
  2, 10, 7, 4, 9, 3, 12, 6, 24, 5, 8, 4, 17, 7, 21, 6, 25, 5, 8, 10, 12, 7, 16,
  8, 10,
];

const hpMonstro = Math.floor(Math.random() * (7 - 3 + 1)) + 5; //vida aleatória
const hpPlayer = 3;
let hitsPlayer = 1;
let hitsMonstro = 1;

let selected_index = 0;

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

// recebe o botão acionado e checa se o conteúdo dele está presente no arrRespostas
function checarResposta(button) {
  // se o número selecionado não estiver presente retorna -1
  index = arrRespostas.indexOf(
    parseInt(document.querySelector(`#${button}`).textContent)
  );
  if (index != -1) return novaQuestao(); //se o index não for -1 (existe no arrResposta) --> chama novaQuestao()
  hitPlayer();
}

// -------------------------- SIGMA
function novaQuestao() {
  hitMonstro(); //aqui pode acabar dando hit no monstro mesmo errando a questão
  //da um hit no monstro e dps chama
}

function hitPlayer() {
  if (hitsPlayer >= hpPlayer) return false;

  document.querySelector("#hp_player").innerHTML = "❤".repeat(
    hpPlayer - hitsPlayer
  );
  hitsPlayer++;
}

function hitMonstro() {
  if (hitsMonstro >= hpMonstro) {
    document.querySelector("#imgMonstro").src = "../styles/inimigos/orc2.png";
    document.querySelector("#hp_monstro").innerHTML = "❤".repeat(hpMonstro);
  } //TROCAR O MONSTRO

  document.querySelector("#hp_monstro").innerHTML = "❤".repeat(
    hpMonstro - hitsMonstro
  );
  hitsMonstro++;
}

//coloca as opções nos botões
//futuramente colocar dinamicamente a pergunta para não ser sempre a mesma
// -------------------------- CLEBER
function init() {
  //escolhe aleatoriamente algum index pra pergunta e resposta (só troquei o 3 para algo dinamico - andrezao)
  selected_index = Math.floor(Math.random() * arrPerguntas.length);

  document.getElementById("conta").innerHTML = arrPerguntas[selected_index];

  // Vidas
  document.querySelector("#hp_monstro").innerHTML = "❤".repeat(hpMonstro);
  document.querySelector("#hp_player").innerHTML = "❤".repeat(hpPlayer);

  //escolhe aleatoriamente um dos botões pra ter a opção correta
  botao_correto = Math.floor(Math.random() * 3);
  console.log(botao_correto);

  for (let i = 0; i < 3; i++) {
    let alterando = `botao${i.toString()}`;

    //se i = o botao selecionado esse botão recebe a resposta correta
    if (i == botao_correto) {
      document.getElementById(alterando).innerHTML =
        arrRespostas[selected_index];
    }
    //se não for: a resposta sofre alguma alteração
    //aqui eu só coloquei um +1 pra diferenciar, tem que arrumar depois
    else {
      document.getElementById(alterando).innerHTML =
        arrRespostas[selected_index] + 1;
    }
  }
}
