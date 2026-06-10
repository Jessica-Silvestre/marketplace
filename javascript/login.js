'use strict';

const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const erro = document.getElementById("erro-login");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    erro.innerHTML = "";

    const erros = [];

    if (usuario.value.trim() === "") {
        erros.push("O campo usuário não pode estar vazio.");
        usuario.setAttribute("aria-invalid", "true");
    } else {
        usuario.removeAttribute("aria-invalid");
    }

    if (senha.value.trim() === "") {
        erros.push("O campo senha não pode estar vazio.");
        senha.setAttribute("aria-invalid", "true");
    } else {
        senha.removeAttribute("aria-invalid");
    }

    if (erros.length > 0) {
        erro.innerHTML = erros.join("<br>");
        return;
    }

    if (
        usuario.value !== "admin" ||
        senha.value !== "123"
    ) {
        erro.textContent = "Usuário ou senha inválidos.";
        return;
    }

    window.location.href = "admin.html";
});

erro.innerHTML = erros
    .map(item => `<li>${item}</li>`)
    .join("");




/*  cadastro-veiculo.js  -    Scripts da página de cadastro de veículo */

document.addEventListener('DOMContentLoaded', () => {

  // ── Contador de caracteres na descrição ──
  const textarea = document.getElementById('descricao');
  const counter  = document.getElementById('char-count');

  if (textarea && counter) {
    textarea.addEventListener('input', () => {
      counter.textContent = textarea.value.length;
    });
  }

  // ── Tooltips Bootstrap ──
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
    new bootstrap.Tooltip(el);
  });

const favorito = document.getElementById("btnFavorito");
const icone = favorito.querySelector("i");

favorito.addEventListener("click", () => {

  favorito.classList.toggle("active");

  if(favorito.classList.contains("active")){
      icone.classList.replace("bi-heart", "bi-heart-fill");
      favorito.setAttribute("aria-pressed", "true");
      favorito.setAttribute("aria-label", "Remover dos favoritos");
  } else {
      icone.classList.replace("bi-heart-fill", "bi-heart");
      favorito.setAttribute("aria-pressed", "false");
      favorito.setAttribute("aria-label", "Adicionar aos favoritos");
  }

});

});