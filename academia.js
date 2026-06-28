

let alunos = [];

// =====================================
// CADASTRAR ALUNOS
// =====================================

function cadastrarAlunos() {

    let resposta = "s";

    while (resposta.toLowerCase() == "s") {

        let nome = prompt(
            "===== CADASTRO DE ALUNOS =====\n\n" +
            "Digite 0 para voltar.\n\n" +
            "Nome do aluno:"
        );

        if (nome == null || nome == "0") {
            return;
        }

        let idade = Number(prompt("Digite a idade:"));

        let peso = Number(prompt("Digite o peso:"));

        let altura = Number(prompt("Digite a altura:"));

        let opcPlano = Number(
            prompt(
                "PLANOS DISPONÍVEIS\n\n" +
                "1 - Básico (R$ 80)\n" +
                "2 - Premium (R$ 120)\n" +
                "3 - VIP (R$ 180)\n\n" +
                "0 - Voltar\n\n" +
                "Escolha o plano:"
            )
        );

        if (opcPlano == 0) {
            return;
        }

        let plano = "";
        let valorPlano = 0;

        if (opcPlano == 1) {

            plano = "Básico";
            valorPlano = 80;

        }
        else if (opcPlano == 2) {

            plano = "Premium";
            valorPlano = 120;

        }
        else if (opcPlano == 3) {

            plano = "VIP";
            valorPlano = 180;

        }
        else {

            alert("Plano inválido!");
            continue;
        }

        let aluno = {

            nome: nome,
            idade: idade,
            peso: peso,
            altura: altura,
            plano: plano,
            valorPlano: valorPlano,
            pagamento: "Não pago"
        };

        alunos.push(aluno);

        alert("Aluno cadastrado com sucesso!");

        resposta = prompt(
            "Deseja cadastrar outro aluno?\n\n" +
            "S - Sim\n" +
            "N - Não\n" +
            "0 - Voltar"
        );

        if (resposta == null || resposta == "0") {
            return;
        }
    }
}

// =====================================
// CONSULTAR IMC
// =====================================

function calcularIMC() {

    if (alunos.length == 0) {

        alert("Nenhum aluno cadastrado!");
        return;
    }

    let texto = "===== CONSULTA DE IMC =====\n";

    for (let i = 0; i < alunos.length; i++) {

        let imc =
            alunos[i].peso /
            (alunos[i].altura * alunos[i].altura);

        let classificacao = "";

        if (imc < 18.5) {

            classificacao = "Abaixo do peso";

        }
        else if (imc < 25) {

            classificacao = "Peso normal";

        }
        else if (imc < 30) {

            classificacao = "Sobrepeso";

        }
        else {

            classificacao = "Obesidade";
        }

        texto +=
            "\n----------------------\n" +
            "Nome: " + alunos[i].nome + "\n" +
            "IMC: " + imc.toFixed(2) + "\n" +
            "Classificação: " + classificacao + "\n";
    }

    alert(texto);
}

// =====================================
// CONTROLE DE PAGAMENTO
// =====================================

function controlePagamento() {

    if (alunos.length == 0) {

        alert("Nenhum aluno cadastrado!");
        return;
    }

    let texto = "===== CONTROLE DE PAGAMENTO =====\n\n";

    for (let i = 0; i < alunos.length; i++) {

        texto +=
            (i + 1) + " - " +
            alunos[i].nome +
            " | Plano: " +
            alunos[i].plano +
            " (R$ " + alunos[i].valorPlano + ")" +
            " | " +
            alunos[i].pagamento +
            "\n";
    }

    texto += "\nDigite 0 para voltar.";

    let escolha = Number(prompt(texto));

    if (escolha == 0 || isNaN(escolha)) {
        return;
    }

    if (escolha >= 1 && escolha <= alunos.length) {

        alunos[escolha - 1].pagamento = "Pago";

        alert("Pagamento registrado com sucesso!");
    }
    else {

        alert("Aluno não encontrado!");
    }
}

// =====================================
// LISTA DE ALUNOS
// =====================================

function listarAlunos() {

    if (alunos.length == 0) {

        alert("Nenhum aluno cadastrado!");
        return;
    }

    let texto = "===== LISTA DE ALUNOS =====\n";

    for (let i = 0; i < alunos.length; i++) {

        texto +=
            "\n----------------------\n" +
            "Nome: " + alunos[i].nome + "\n" +
            "Idade: " + alunos[i].idade + "\n" +
            "Peso: " + alunos[i].peso + "\n" +
            "Altura: " + alunos[i].altura + "\n" +
            "Plano: " + alunos[i].plano +
            " (R$ " + alunos[i].valorPlano + ")\n" +
            "Pagamento: " + alunos[i].pagamento + "\n";
    }

    alert(texto);
}

// =====================================
// PLANOS MENSAIS
// =====================================

function mostrarPlanos() {

    alert(
        "===== PLANOS MENSAIS =====\n\n" +
        "1 - BÁSICO\n" +
        "Musculação\n" +
        "R$ 80 por mês\n\n" +

        "2 - PREMIUM\n" +
        "Musculação + Aeróbico\n" +
        "R$ 120 por mês\n\n" +

        "3 - VIP\n" +
        "Acesso total + Personal\n" +
        "R$ 180 por mês"
    );
}

// =====================================
// MENU PRINCIPAL
// =====================================

function menuPrincipal() {

    let opc = 0;

    while (opc != 9) {

        opc = Number(
            prompt(
                "===== ACADEMIA =====\n\n" +
                "1 - Cadastrar alunos\n" +
                "2 - Consultar IMC\n" +
                "3 - Controle de pagamento\n" +
                "4 - Lista de alunos\n" +
                "5 - Planos mensais\n" +
                "9 - Sair\n\n" +
                "Escolha uma opção:"
            )
        );

        if (opc == 1) {

            cadastrarAlunos();

        }
        else if (opc == 2) {

            calcularIMC();

        }
        else if (opc == 3) {

            controlePagamento();

        }
        else if (opc == 4) {

            listarAlunos();

        }
        else if (opc == 5) {

            mostrarPlanos();

        }
        else if (opc == 9) {

            alert("Programa encerrado.");

        }
        else {

            alert("Opção inválida!");
        }
    }
}

// =====================================
// INICIAR SISTEMA
// =====================================

menuPrincipal();
