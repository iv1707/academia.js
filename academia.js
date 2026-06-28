let alunos = [];

const app = document.getElementById("app");

function menuPrincipal() {

    app.innerHTML = `
        <h2>===== ACADEMIA =====</h2>

        <button onclick="cadastrarAluno()">
            1 - Cadastrar Aluno
        </button>

        <br><br>

        <button onclick="consultarIMC()">
            2 - Consultar IMC
        </button>

        <br><br>

        <button onclick="controlePagamento()">
            3 - Controle de Pagamento
        </button>

        <br><br>

        <button onclick="listarAlunos()">
            4 - Lista de Alunos
        </button>

        <br><br>

        <button onclick="mostrarPlanos()">
            5 - Planos Mensais
        </button>
    `;
}

function cadastrarAluno() {

    let nome = prompt("Nome do aluno:");

    if (!nome) {
        menuPrincipal();
        return;
    }

    let idade = Number(prompt("Idade:"));
    let peso = Number(prompt("Peso:"));
    let altura = Number(prompt("Altura:"));

    let opcPlano = Number(
        prompt(
            "PLANOS DISPONÍVEIS\n\n" +
            "1 - Básico (R$80)\n" +
            "2 - Premium (R$120)\n" +
            "3 - VIP (R$180)\n\n" +
            "Escolha:"
        )
    );

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

    menuPrincipal();
}

function consultarIMC() {

    let texto = "===== CONSULTA DE IMC =====\n\n";

    if (alunos.length == 0) {
        texto += "Nenhum aluno cadastrado!";
    }
    else {

        for (let aluno of alunos) {

            let imc = aluno.peso / (aluno.altura * aluno.altura);

            texto +=
                aluno.nome +
                " - IMC: " +
                imc.toFixed(2) +
                "\n";
        }
    }

    alert(texto);
}

function controlePagamento() {

    if (alunos.length == 0) {
        alert("Nenhum aluno cadastrado!");
        return;
    }

    let texto = "CONTROLE DE PAGAMENTO\n\n";

    for (let i = 0; i < alunos.length; i++) {

        texto +=
            (i + 1) +
            " - " +
            alunos[i].nome +
            " (" +
            alunos[i].pagamento +
            ")\n";
    }

    let escolha = Number(
        prompt(texto + "\nDigite o número do aluno:")
    );

    if (escolha >= 1 && escolha <= alunos.length) {

        alunos[escolha - 1].pagamento = "Pago";

        alert("Pagamento registrado!");
    }
}

function listarAlunos() {

    let texto = "===== LISTA DE ALUNOS =====\n\n";

    if (alunos.length == 0) {

        texto += "Nenhum aluno cadastrado!";
    }
    else {

        for (let aluno of alunos) {

            texto +=
                "Nome: " + aluno.nome + "\n" +
                "Idade: " + aluno.idade + "\n" +
                "Plano: " + aluno.plano + "\n" +
                "Pagamento: " + aluno.pagamento + "\n\n";
        }
    }

    alert(texto);
}

function mostrarPlanos() {

    alert(
        "PLANOS MENSAIS\n\n" +
        "1 - Básico: R$80\n" +
        "2 - Premium: R$120\n" +
        "3 - VIP: R$180"
    );
}

menuPrincipal();
