let options = [2, 3, 1]
let resposta = 2

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const conta = document.querySelector("#conta").textContent;

});

// recebe o index vindo do botão (0, 1 ou 2) que seria correspondente ao index da opção no array
function checarResposta(button){
  console.log(options[button])
  if (options[button] == resposta){
    console.log('correto');
    novaQuestao();
  }
}

function novaQuestao(){
  //exibir nova pergunta, atualizar as opcoes e diminuir a vida do mosntro (?) 
}

//coloca as opções nos botões
//futuramente colocar dinamicamente a pergunta para não ser sempre a mesma
function init(){
  for (let i = 0; i < 3; i++) {
    let alterando = "botao"+i.toString()
    console.log(alterando)
    document.getElementById(alterando).innerHTML = options[i]
  }
}
