let alunos = [];

function cadastrarAluno() {

    let nome = prompt("Digite o nome do aluno:");

    if (nome === null || nome === "") {
        return;
    }

    let idade = Number(prompt("Digite a idade:"));
    let peso = Number(prompt("Digite o peso:"));
    let altura = Number(prompt("Digite a altura:"));

    let planoEscolhido = prompt(
        "PLANOS DISPONÍVEIS\n\n" +
        "1 - Básico (R$ 80)\n" +
        "2 - Premium (R$ 120)\n" +
        "3 - VIP (R$ 180)\n\n" +
        "Escolha um plano:"
    );

    let plano = "";
    let valorPlano = 0;

    if (planoEscolhido == "1") {
        plano = "Básico";
        valorPlano = 80;
    }
    else if (planoEscolhido == "2") {
        plano = "Premium";
        valorPlano = 120;
    }
    else {
        plano = "VIP";
        valorPlano = 180;
    }

    alunos.push({
        nome,
        idade,
        peso,
        altura,
        plano,
        valorPlano,
        pagamento: "Não pago"
    });

    alert("Aluno cadastrado com sucesso!");
}

function menu() {

    let opcao;

    do {

        opcao = prompt(
            "===== ACADEMIA =====\n\n" +
            "1 - Cadastrar aluno\n" +
            "9 - Sair\n\n" +
            "Escolha uma opção:"
        );

        if (opcao == "1") {
            cadastrarAluno();
        }

    } while (opcao != "9");

    alert("Programa encerrado!");
}

menu();
