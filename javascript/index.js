const estadoSelect = document.getElementById("estado");
const cidadeSelect = document.getElementById("cidade");

// Carregar Estados
async function carregarEstados() {
    try {

        const response = await fetch(
            "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );

        const estados = await response.json();

        estados.sort((a, b) =>
            a.nome.localeCompare(b.nome)
        );

        estados.forEach(estado => {

            const option = document.createElement("option");

            option.value = estado.sigla;
            option.textContent = estado.nome;

            estadoSelect.appendChild(option);
        });

    } catch (erro) {

        console.error("Erro ao carregar estados:", erro);

    }
}

// Carregar Cidades
async function carregarCidades(siglaEstado) {

    cidadeSelect.innerHTML =
        '<option value="">Carregando cidades...</option>';

    try {

        const response = await fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${siglaEstado}/municipios`
        );

        const cidades = await response.json();

        cidadeSelect.innerHTML =
            '<option value="">Selecione uma cidade</option>';

        cidades.forEach(cidade => {

            const option = document.createElement("option");

            option.value = cidade.nome;
            option.textContent = cidade.nome;

            cidadeSelect.appendChild(option);
        });

    } catch (erro) {

        console.error("Erro ao carregar cidades:", erro);

        cidadeSelect.innerHTML =
            '<option value="">Erro ao carregar cidades</option>';
    }
}

// Quando selecionar um estado
estadoSelect.addEventListener("change", function () {

    const siglaEstado = this.value;

    if (siglaEstado) {
        carregarCidades(siglaEstado);
    } else {
        cidadeSelect.innerHTML =
            '<option value="">Selecione uma cidade</option>';
    }
});

