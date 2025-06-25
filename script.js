function mostrarDetalhes(carro) {
    const detalhes = document.getElementById("detalhes");
    const titulo = document.getElementById("detalhes-titulo");
    const descricao = document.getElementById("detalhes-descricao");
    const preco = document.getElementById("detalhes-preco");

    // Definindo os dados dos carros
    const carros = {
        car1: {
            nome: "Carro 1",
            descricao: "Carro esportivo japonês com motor turbo.",
            preco: "R$ 50.000",
        },
        car2: {
            nome: "Carro 2",
            descricao: "Carro clássico, ideal para colecionadores.",
            preco: "R$ 60.000",
        },
        car3: {
            nome: "Carro 3",
            descricao: "Modelo moderno com tecnologia de ponta.",
            preco: "R$ 70.000",
        },
    };

    // Exibindo os detalhes
    titulo.innerText = carros[carro].nome;
    descricao.innerText = carros[carro].descricao;
    preco.innerText = carros[carro].preco;

    detalhes.style.display = "flex";
}

function fecharDetalhes() {
    const detalhes = document.getElementById("detalhes");
    detalhes.style.display = "none";
}
