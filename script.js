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

function setCookie(cname, cvalue, exhours) {
  const d = new Date();
  d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const votingForm = document.getElementById('votingForm');

votingForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const candidateNumber = candidateInput.value;
  const password = passwordInput.value;
  
  if (candidateNumber !== "") {
    // Primeiro, verificamos se foi selecionado um candidato
    // Se sim, então pedimos a senha
    if (password === '1') {
      // Verificamos a senha
      const candidateName = document.querySelector(`.card:nth-of-type(${candidateNumber}) p:nth-of-type(2)`).textContent.trim().split(": ")[1]; // Obtém o nome do candidato
      const existingVotes = getCookie('votes') ? JSON.parse(getCookie('votes')) : {}; // Obtém os votos armazenados no cookie
      existingVotes[candidateName] = existingVotes[candidateName] ? existingVotes[candidateName] + 1 : 1; // Adiciona 1 ao contador de votos do candidato
      setCookie('votes', JSON.stringify(existingVotes), 12); // Salva os votos no cookie com validade de 12 horas
      alert(`Senha correta. Voto computado para o candidato ${candidateName}!`); // Exibe a mensagem com o nome do candidato
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

function redirectToResultsPage() {
  const password = passwordInput.value;
  if (password === '1') {
    window.location.href = "results.html";
  } else {
    alert("Senha incorreta!");
  }
}
