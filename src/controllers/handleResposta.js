let options = [2, 3, 1];
let resposta = 2;

let hp_atual = 50
let hp_total = 50

const arrPerguntas = ["1+1", "2^3", "2/2"];
const arrRespostas = [2, 8, 1];

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

// recebe o index vindo do botão (0, 1 ou 2) que seria correspondente ao index da opção no array
function checarResposta(button) {
  console.log(options[button]);
  if (options[button] == resposta) return novaQuestao();
  errou();
}

function novaQuestao() {
  //exibir nova pergunta, atualizar as opcoes e diminuir a vida do mosntro (?)
  hp_atual -= 5;
  document.getElementById("hp_monstro").innerHTML = "VIDA: "+ hp_atual+"/"+hp_total;
}

function errou(){
  //diminuiu uma vida
  novaQuestao();
}

//coloca as opções nos botões
//futuramente colocar dinamicamente a pergunta para não ser sempre a mesma
function init() {
  document.getElementById("conta").innerHTML = arrPerguntas[2];

  document.getElementById("hp_monstro").innerHTML = "VIDA: "+ hp_atual+"/"+hp_total;

  for (let i = 0; i < 3; i++) {
    let alterando = "botao" + i.toString();
    console.log(alterando);
    document.getElementById(alterando).innerHTML = options[i];
  }
}
