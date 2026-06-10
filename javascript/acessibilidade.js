'use strict';

// BOTÕES DESKTOP
const btnAumentar = document.getElementById('aumentarFonte');
const btnDiminuir = document.getElementById('diminuirFonte');
const btnContraste = document.getElementById('contrasteNavbar');

// BOTÕES MOBILE
const btnAumentarMobile = document.getElementById('aumentarFonteMobile');
const btnDiminuirMobile = document.getElementById('diminuirFonteMobile');
const btnContrasteMobile = document.getElementById('contrasteNavbarMobile');

let tamanhoBase = 16;

function aplicarFonte() {
  document.documentElement.style.fontSize = `${tamanhoBase}px`;
}

function aumentarFonte() {
  if (tamanhoBase < 22) {
    tamanhoBase++;
    aplicarFonte();
  }
}

function diminuirFonte() {
  if (tamanhoBase > 12) {
    tamanhoBase--;
    aplicarFonte();
  }
}

aplicarFonte();

// ====================
// CONTRASTE
// ====================

function alternarContraste() {
  document.body.classList.toggle('contraste-ativo');

  const ativo = document.body.classList.contains('contraste-ativo');

  if (btnContraste) {
    btnContraste.setAttribute('aria-pressed', ativo);
  }

  if (btnContrasteMobile) {
    btnContrasteMobile.setAttribute('aria-pressed', ativo);
  }
}

// ====================
// EVENTOS DESKTOP
// ====================

if (btnAumentar) {
  btnAumentar.addEventListener('click', aumentarFonte);
}

if (btnDiminuir) {
  btnDiminuir.addEventListener('click', diminuirFonte);
}

if (btnContraste) {
  btnContraste.addEventListener('click', alternarContraste);
}

// ====================
// EVENTOS MOBILE
// ====================

if (btnAumentarMobile) {
  btnAumentarMobile.addEventListener('click', aumentarFonte);
}

if (btnDiminuirMobile) {
  btnDiminuirMobile.addEventListener('click', diminuirFonte);
}

if (btnContrasteMobile) {
  btnContrasteMobile.addEventListener('click', alternarContraste);
}