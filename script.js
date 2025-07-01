function mostrarDetalhes(carro) {
    const detalhes = document.getElementById("detalhes");
    const titulo = document.getElementById("detalhes-titulo");
    const descricao = document.getElementById("detalhes-descricao");
    const preco = document.getElementById("detalhes-preco");

    // Definindo os dados dos carros
    const carros = {
        car1: {
            nome: "Nissan Skyline R34 Vspac",
            descricao: "um carro lendário que conquistou os corações e a imaginação de entusiastas de automóveis em todo o mundo. Sua tecnologia avançada, motor potente e design elegante o tornam um ícone da engenharia de desempenho japonesa.",
            preco: "R$ 250.000",
        },
        car2: {
            nome: "Nissan Silvia S15 Spec",
            descricao: "Carro clássico, ideal para colecionadores, e pra quem ama ele por conta do filme velozes e furiosos.",
            preco: "R$ 120.000",
        },
        car3: {
            nome: "Mitsubishi Lancer Evolution IX MR",
            descricao: "Modelo moderno com tecnologia de ponta. e famosa cadeira eletrica por causa da adrenalina",
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
