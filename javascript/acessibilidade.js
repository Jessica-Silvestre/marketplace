'use strict';

// ── Tamanho de fonte ──────────────────────────────────────────
const btnAumentar = document.getElementById('aumentarFonte');
const btnDiminuir = document.getElementById('diminuirFonte');

// Lê tamanho salvo (persistência entre páginas) ou usa 16
let tamanhoBase = parseInt(localStorage.getItem('fontSize'), 10) || 16;

function aplicarFonte() {
  document.documentElement.style.fontSize = tamanhoBase + 'px';
}

if (btnAumentar) {
  btnAumentar.addEventListener('click', () => {
    if (tamanhoBase < 22) {
      tamanhoBase += 1;
      localStorage.setItem('fontSize', tamanhoBase);
      aplicarFonte();
    }
  });
}

if (btnDiminuir) {
  btnDiminuir.addEventListener('click', () => {
    if (tamanhoBase > 12) {
      tamanhoBase -= 1;
      localStorage.setItem('fontSize', tamanhoBase);
      aplicarFonte();
    }
  });
}

// Aplica ao carregar a página
aplicarFonte();


// ── Alto contraste ────────────────────────────────────────────
const btnContraste = document.getElementById('contrasteNavbar');

// Restaura preferência salva
if (localStorage.getItem('contraste') === 'ativo') {
  document.body.classList.add('contraste-ativo');
  if (btnContraste) btnContraste.setAttribute('aria-pressed', 'true');
}

if (btnContraste) {
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('contraste-ativo');
    const ativo = document.body.classList.contains('contraste-ativo');
    btnContraste.setAttribute('aria-pressed', String(ativo));
    localStorage.setItem('contraste', ativo ? 'ativo' : 'inativo');
  });
}