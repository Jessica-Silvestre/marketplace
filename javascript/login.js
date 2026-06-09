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

usuario.removeAttribute("aria-invalid");
senha.removeAttribute("aria-invalid");

// ── Toggle mostrar/ocultar senha ──────────────────────────────
const toggleBtn = document.getElementById('toggleSenha');
const senhaInput = document.getElementById('senha');
const toggleIcon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  const visible = senhaInput.type === 'text';
  senhaInput.type = visible ? 'password' : 'text';
  toggleIcon.className = visible ? 'bi bi-eye-slash' : 'bi bi-eye';
  toggleBtn.setAttribute('aria-pressed', String(!visible));
  toggleBtn.setAttribute('aria-label', visible ? 'Mostrar senha' : 'Ocultar senha');
});