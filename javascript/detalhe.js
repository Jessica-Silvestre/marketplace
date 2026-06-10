
const fotoPrincipal = document.querySelector('.foto-principal');
const miniaturas = document.querySelectorAll('.miniatura');

const modal = document.getElementById('modalImagem');
const imagemModal = document.getElementById('imagemModal');

const fecharModal = document.querySelector('.fechar-modal');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');

let imagens = [];

// cria lista de imagens
imagens.push(fotoPrincipal.src);

miniaturas.forEach((img) => {
    imagens.push(img.src);
});

let indiceAtual = 0;


// TROCA FOTO PRINCIPAL COM MINIATURA

miniaturas.forEach((miniatura) => {

    miniatura.addEventListener('click', () => {

        const fotoAtual = fotoPrincipal.src;

        fotoPrincipal.src = miniatura.src;
        miniatura.src = fotoAtual;

        imagens = [];

        imagens.push(fotoPrincipal.src);

        miniaturas.forEach((img) => {
            imagens.push(img.src);
        });

    });

});


// ABRIR MODAL

fotoPrincipal.addEventListener('click', () => {

    imagens = [];

    imagens.push(fotoPrincipal.src);

    miniaturas.forEach((img) => {
        imagens.push(img.src);
    });

    indiceAtual = 0;

    imagemModal.src = imagens[indiceAtual];

    modal.style.display = 'flex';

});


// FECHAR

fecharModal.addEventListener('click', () => {

    modal.style.display = 'none';

});


// SETA DIREITA

setaDireita.addEventListener('click', () => {

    indiceAtual++;

    if(indiceAtual >= imagens.length){
        indiceAtual = 0;
    }

    imagemModal.src = imagens[indiceAtual];

});


// SETA ESQUERDA

setaEsquerda.addEventListener('click', () => {

    indiceAtual--;

    if(indiceAtual < 0){
        indiceAtual = imagens.length - 1;
    }

    imagemModal.src = imagens[indiceAtual];

});


// TECLADO

document.addEventListener('keydown', (e) => {

    if(modal.style.display !== 'flex') return;

    if(e.key === 'Escape'){
        modal.style.display = 'none';
    }

    if(e.key === 'ArrowRight'){
        setaDireita.click();
    }

    if(e.key === 'ArrowLeft'){
        setaEsquerda.click();
    }

});

// ======================
// ZOOM NO MODAL
// ======================

let zoomAtual = 1;

imagemModal.addEventListener('wheel', (e) => {

    e.preventDefault();

    if (e.deltaY < 0) {
        zoomAtual += 0.2;
    } else {
        zoomAtual -= 0.2;
    }

    if (zoomAtual < 1) zoomAtual = 1;
    if (zoomAtual > 5) zoomAtual = 5;

    imagemModal.style.transform = `scale(${zoomAtual})`;

});


// RESETA O ZOOM AO ABRIR O MODAL

fotoPrincipal.addEventListener('click', () => {

    zoomAtual = 1;
    imagemModal.style.transform = 'scale(1)';

});


// RESETA O ZOOM AO FECHAR

fecharModal.addEventListener('click', () => {

    zoomAtual = 1;
    imagemModal.style.transform = 'scale(1)';

});