var numero, palpite, mensagem
 numero = Math.floor(Math.random() * 100) + 1;

function verificarPalpite() {
   palpite = parseInt(document.getElementById("palpite").value);
   mensagem = document.getElementById("mensagem");


  if (palpite < numero) {
    mensagem.textContent = "Muito baixo!";
    mensagem.style.color = "blue";
  } 
  
  else if (palpite > numero) {
    mensagem.textContent = "Muito alto!";
    mensagem.style.color = "red";
  } 
  
  else {
    mensagem.textContent = "Você acertou! O número aleatório era: " + numero ;
    mensagem.style.color = "green";
  }


}
