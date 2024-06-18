const arrPerguntas = ["1+1", "2^3", "2/2"];
const arrRespostas = [2, 8, 1];

const hpMonstro = 5;
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
  index = arrRespostas.indexOf(parseInt(document.querySelector(`#${button}`).textContent)); 
  if (index != -1) return novaQuestao(); //se o index não for -1 (existe no arrResposta) --> chama novaQuestao()
  hitPlayer();
}

// -------------------------- SIGMA
function novaQuestao() {
  hitMonstro() //aqui pode acabar dando hit no monstro mesmo errando a questão
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
  //escolhe aleatoriamente algum index pra pergunta e resposta 
  selected_index = Math.floor(Math.random() * 3);

  document.getElementById("conta").innerHTML = arrPerguntas[selected_index];

  // Vidas
  document.querySelector("#hp_monstro").innerHTML = "❤".repeat(hpMonstro);
  document.querySelector("#hp_player").innerHTML = "❤".repeat(hpPlayer);

  //escolhe aleatoriamente um dos botões pra ter a opção correta
  botao_correto =  Math.floor(Math.random() * 3);
  console.log(botao_correto)

  for (let i = 0; i < 3; i++) {

    let alterando = `botao${i.toString()}`;

    //se i = o botao selecionado esse botão recebe a resposta correta
    if (i == botao_correto){
      document.getElementById(alterando).innerHTML = arrRespostas[selected_index];  
    }
    //se não for: a resposta sofre alguma alteração
    //aqui eu só coloquei um +1 pra diferenciar, tem que arrumar depois
    else{
      document.getElementById(alterando).innerHTML = arrRespostas[selected_index] + 1;
    }
  }
}
