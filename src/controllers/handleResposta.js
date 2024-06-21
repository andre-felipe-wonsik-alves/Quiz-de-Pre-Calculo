const arrPerguntas = [
  "1 + 1 =",
  "2 x 5 =",
  "10 - 3 =",
  "16 : 4 =",
  "3^2 =",
  "√9 =",
  "5 + 7 =",
  "8 - 2 =",
  "4 x 6 =",
  "25 : 5 =",
  "2^3 =",
  "√16 =",
  "9 + 8 =",
  "14 - 7 =",
  "3 x 7 =",
  "36 : 6 =",
  "5^2 =",
  "√25 =",
  "6 + 2 =",
  "20 - 10 =",
  "4 x 3 =",
  "49 : 7 =",
  "2^4 =",
  "√64 =",
  "7 + 3 =",
  "Qual o valor de x em 4x + 2 = 0",
  "Qual o valor de x em 8x - 3 = 5",
  "Qual o valor de x em 9x - 4x + 10 = 7x - 30",
  "Qual o valor de x em 4x + 8 = 0",
  "Qual o valor de x em 7x - 5 = 2x + 10",
  "Qual o valor de x em x^2 - 4x + 4 = 0",
  "Qual o valor de x em 3x^2 + 6x + 3 = 0",
  "Qual o valor de x em 5x^2 - 10x + 5 = 0",
  "Qual o valor de x em 4x^2 - 4x + 1 = 0",
  "Qual o valor de x em 5x^2 = 0",
  "Qual o valor de x em 2^x = 64",
  "Qual o valor de x em 9^x = 1 : 3",
  "Qual o valor de x em 2^x = 1 : 32", 
  "Qual o valor de x em 2^x+4 = 16", 
  "Qual o valor de x em 5^2x+1 = 1 : 625", 
  "Qual o valor de x em Log₂ (x) = 3",
  "Qual o valor de x em Log₁₀ (2x - 1) = 1",
  "Qual o valor de x em Log₅ (x + 4) = 2",
  "Qual o valor de x em Log₃ (3x) = 2",
  "Qual o valor de x em Log₄ (x² - 3x) = 1",
];


const arrRespostas = [
  2, 10, 7, 4, 9, 3, 12, 6, 24, 5, 8, 4, 17, 7, 21, 6, 25, 5, 8, 10, 12, 7, 16,
  8, 10, -0.5, 1, 20, -2, 3, 2, -1, 1, 0.5, 0, 6, -0.5, -5, 0, -2.5, 8, 5.5, 21, 3, 4,
];

const arrRespostasErradas = [
  1.5, 11, 3.5, 13, 14, 15, 22, 18, 23, 22.5, 26, 40, 19, -7, 27, 30, 28, 31, 44, 62,
  100, 200, 50, 55, 69, -3, -2.5, -11, -22, 35, 45, 60, 32, 41, 38, 65, 70, 68, -10, -11, -12.5, -8, -4, -3, -25,
];

const hpMonstro = Math.floor(Math.random() * (5 - 3 + 1)) + 3; //vida aleatória
const hpPlayer = 3;
let hitsPlayer = 1;
let hitsMonstro = 1;

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
  hitMonstro();

  indexAleatorio = Math.floor(Math.random() * arrPerguntas.length);
  document.getElementById("conta").innerHTML =
    arrPerguntas[indexAleatorio] + " ?"; //aqui troca a pergunta

  loadBotoes(indexAleatorio);
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

    let monstroAleatorio = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
    console.log(monstroAleatorio)
    document.querySelector(
      "#imgMonstro"
    ).src = `../styles/inimigos/orc${monstroAleatorio}.png`;
    document.querySelector("#hp_monstro").innerHTML = "❤".repeat(hpMonstro);

    score += 100;
    document.querySelector("#pontuacao").innerHTML = `PONTOS: ${score}`;
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
  scoreFinal.innerHTML += "Pontuação: " + score;

  recarregar.addEventListener("click", (e) => {
    window.location.reload(true)
  });
}

//essa função vai fazer o trabalho de colocar o texto nos botões pra não repetir código no init e novaQuestao
function loadBotoes(index_selecionado){
  let last_index = Math.floor(Math.random() * arrRespostasErradas.length);
  let new_index = 0;

  //escolhe aleatoriamente um dos botões pra ter a opção correta
  botao_correto = Math.floor(Math.random() * 3);

  for (let i = 0; i < 3; i++) {
    let alterando = `botao${i.toString()}`;

    //se i = o botao selecionado esse botão recebe a resposta correta
    if (i == botao_correto) {
      document.getElementById(alterando).innerHTML =
        arrRespostas[index_selecionado];
    }
    //se não for: a resposta sofre alguma alteração
    else {
      new_index = Math.floor(Math.random() * arrRespostasErradas.length);
      if (new_index == last_index) {
        while (new_index == last_index){
          new_index = Math.floor(Math.random() * arrRespostasErradas.length);
        }
      }
      document.getElementById(alterando).innerHTML =
        arrRespostasErradas[Math.floor(Math.random() * arrRespostasErradas.length)];
    }
  }
}

//roda ao carregar o <body>
function init() {
  //escolhe aleatoriamente algum index pra pergunta e resposta (só troquei o 3 para algo dinamico - andrezao)
  let selected_index = Math.floor(Math.random() * arrPerguntas.length);

  document.getElementById("conta").innerHTML =
    arrPerguntas[selected_index] + " ?"; //botei um ? - erickão

  document.querySelector("#pontuacao").innerHTML = `PONTOS: ${score}`;

  // Vidas
  document.querySelector("#hp_monstro").innerHTML = "❤".repeat(hpMonstro);
  document.querySelector("#hp_player").innerHTML = "❤".repeat(hpPlayer);

  loadBotoes(selected_index);
}
