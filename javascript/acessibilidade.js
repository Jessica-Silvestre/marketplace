'use strict' 
const btnAumentar = document.getElementById("aumentarFonte");
const btnDiminuir = document.getElementById("diminuirFonte");

let tamanhoBase = 16; // base em px

function aplicarFonte() {
  document.documentElement.style.fontSize = tamanhoBase + "px";
}

// A+
btnAumentar.addEventListener("click", () => {
  if (tamanhoBase < 22) {
    tamanhoBase += 1;
    aplicarFonte();
  }
});

// A-
btnDiminuir.addEventListener("click", () => {
  if (tamanhoBase > 12) {
    tamanhoBase -= 1;
    aplicarFonte();
  }
});

// inicia padrão
aplicarFonte();

const btnContraste = document.getElementById("contrasteNavbar");

btnContraste.addEventListener("click", () => {
  document.body.classList.toggle("contraste-ativo");

  // acessibilidade (estado do botão)
  const ativo = document.body.classList.contains("contraste-ativo");
  btnContraste.setAttribute("aria-pressed", ativo);
});