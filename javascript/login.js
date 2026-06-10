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