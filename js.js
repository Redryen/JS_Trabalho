// Gera o número aleatório de 1 a 100 ao carregar a página
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const mensagem = document.getElementById("mensagem");


  if (palpite < numeroSecreto) {
    mensagem.textContent = "Muito baixo!";
    mensagem.style.color = "blue";
  } else if (palpite > numeroSecreto) {
    mensagem.textContent = "Muito alto!";
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = "Você acertou!";
    mensagem.style.color = "green";
  }
}
