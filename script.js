const candidateInput = document.getElementById('candidateNumber');
const passwordInput = document.getElementById('password');

function addNumber(number) {
  if (candidateInput.value.length < 2) {
    candidateInput.value += number;
  }
}

function clearInput() {
  candidateInput.value = "";
  passwordInput.value = "";
}

const votingForm = document.getElementById('votingForm');

votingForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const candidateNumber = candidateInput.value;
  const password = passwordInput.value;
  
  if (candidateNumber !== "") {
    // Primeiro, verificamos se foi selecionado um candidato
    // Se sim, então pedimos a senha
    if (password === 'g') {
      // Verificamos a senha
      alert('Senha correta. Voto computado para o candidato ' + candidateNumber + '!');
      window.location.reload();
    } else {
      // Senha incorreta
      alert('Senha incorreta. Tente novamente.');
    }
  } else {
    // Se nenhum candidato foi selecionado
    alert('Selecione um candidato antes de prosseguir.');
  }
});
