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

const arrRespostasErradas = [
  1, 11, 0, 13, 14, 15, 22, 18, 23, 20, 26, 40, 19, -7, 27, 30, 28, 31, 44, 62,
  100, 200, 50, 55, 69,
];

const hpMonstro = Math.floor(Math.random() * (5 - 3 + 1)) + 3; //vida aleatória
const hpPlayer = 3;
let hitsPlayer = 1;
let hitsMonstro = 1;

let selected_index = 0;

// SCORE
let score = 0;

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

function novaQuestao() {
  hitMonstro(); //aqui pode acabar dando hit no monstro mesmo errando a questão         --- Pelo jeito não da dano errando não! -erickão

  indexAleatorio = Math.floor(Math.random() * arrPerguntas.length);
  document.getElementById("conta").innerHTML =
    arrPerguntas[indexAleatorio] + " ?"; //aqui troca a pergunta

  //aqui só repeti oq o ener fez no init mas com os novos valores gerados na novaQuestao
  botao_correto2 = Math.floor(Math.random() * 3);

  for (let i = 0; i < 3; i++) {
    let alterando2 = `botao${i.toString()}`;

    //se i = o botao selecionado esse botão recebe a resposta correta
    if (i == botao_correto2) {
      document.getElementById(alterando2).innerHTML =
        arrRespostas[indexAleatorio];
    }
    //se não for: a resposta sofre alguma alteração
    else {
      document.getElementById(alterando2).innerHTML =
        arrRespostasErradas[indexAleatorio];
    }
  }
}

function hitPlayer() {
  if (hitsPlayer >= hpPlayer) return derrota();

  document.querySelector("#hp_player").innerHTML = "❤".repeat(
    hpPlayer - hitsPlayer
  );
  hitsPlayer++;
}

function hitMonstro() {
  if (hitsMonstro >= hpMonstro) {
    hitsMonstro = 0;

    let monstroAleatorio = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(monstroAleatorio)
    document.querySelector(
      "#imgMonstro"
    ).src = `../styles/inimigos/orc${monstroAleatorio}.png`;
    document.querySelector("#hp_monstro").innerHTML = "❤".repeat(hpMonstro);

    score += 100;
  } else {
    document.querySelector("#hp_monstro").innerHTML = "❤".repeat(
      hpMonstro - hitsMonstro
    );
  }
  hitsMonstro++;
  return;
}

function derrota() {
  const divDerrota = document.querySelector("#derrota");
  const recarregar = document.querySelector("#recarregar");
  const scoreFinal = document.querySelector("#score");

  divDerrota.style.visibility = "visible";
  scoreFinal.innerHTML += score;

  recarregar.addEventListener("click", (e) => {
    window.location.reload(true)
  });
}

function init() {
  //escolhe aleatoriamente algum index pra pergunta e resposta (só troquei o 3 para algo dinamico - andrezao)
  selected_index = Math.floor(Math.random() * arrPerguntas.length);

  document.getElementById("conta").innerHTML =
    arrPerguntas[selected_index] + " ?"; //botei um ? - erickão

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
    else {
      document.getElementById(alterando).innerHTML =
        arrRespostasErradas[selected_index]; //botei umas respostas erradas aqui tropa
    }
  }
}
