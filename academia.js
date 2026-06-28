let alunos = [];

const app = document.getElementById("app");

// =====================================
// MENU PRINCIPAL
// =====================================

function menuPrincipal() {

    app.innerHTML = `
        <h2>===== ACADEMIA =====</h2>

        <pre>
1 - Cadastrar alunos
2 - Consultar IMC
3 - Controle de pagamento
4 - Lista de alunos
5 - Planos mensais
9 - Sair
        </pre>

        <p>Digite a opção:</p>

        <input type="number" id="opcaoMenu">

        <button onclick="executarOpcao()">
            Confirmar
        </button>
    `;
}

// =====================================
// EXECUTAR OPÇÃO
// =====================================

function executarOpcao() {

    let opc = Number(
        document.getElementById("opcaoMenu").value
    );

    if (opc == 1) {

        telaCadastro();

    }
    else if (opc == 2) {

        consultarIMC();

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

        app.innerHTML = `
            <h2>Programa encerrado.</h2>
        `;
    }
    else {

        alert("Opção inválida!");
    }
}

// =====================================
// TELA DE CADASTRO
// =====================================

function telaCadastro() {

    app.innerHTML = `
        <h2>===== CADASTRO DE ALUNOS =====</h2>

        <p>Nome:</p>
        <input id="nome">

        <p>Idade:</p>
        <input id="idade" type="number">

        <p>Peso:</p>
        <input id="peso" type="number">

        <p>Altura:</p>
        <input id="altura" type="number" step="0.01">

        <pre>
PLANOS DISPONÍVEIS

1 - Básico (R$ 80)
2 - Premium (R$ 120)
3 - VIP (R$ 180)
0 - Voltar
        </pre>

        <p>Escolha o plano:</p>

        <input id="plano" type="number">

        <br><br>

        <button onclick="cadastrarAluno()">
            Salvar
        </button>

        <button onclick="menuPrincipal()">
            0 - Voltar
        </button>
    `;
}

// =====================================
// CADASTRAR ALUNO
// =====================================

function cadastrarAluno() {

    let nome =
        document.getElementById("nome").value;

    let idade = Number(
        document.getElementById("idade").value
    );

    let peso = Number(
        document.getElementById("peso").value
    );

    let altura = Number(
        document.getElementById("altura").value
    );

    let opcPlano = Number(
        document.getElementById("plano").value
    );

    if (opcPlano == 0) {

        menuPrincipal();
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
        return;
    }

    alunos.push({

        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        plano: plano,
        valorPlano: valorPlano,
        pagamento: "Não pago"
    });

    alert("Aluno cadastrado com sucesso!");

    menuPrincipal();
}

// =====================================
// CONSULTAR IMC
// =====================================

function consultarIMC() {

    let html = `
        <h2>===== CONSULTA DE IMC =====</h2>
    `;

    if (alunos.length == 0) {

        html += `
            <p>Nenhum aluno cadastrado!</p>
        `;
    }
    else {

        for (let i = 0; i < alunos.length; i++) {

            let imc =
                alunos[i].peso /
                (alunos[i].altura * alunos[i].altura);

            let classificacao = "";

            if (imc < 18.5) {

                classificacao =
                    "Abaixo do peso";
            }
            else if (imc < 25) {

                classificacao =
                    "Peso normal";
            }
            else if (imc < 30) {

                classificacao =
                    "Sobrepeso";
            }
            else {

                classificacao =
                    "Obesidade";
            }

            html += `
                <hr>

                <p>Nome: ${alunos[i].nome}</p>
                <p>IMC: ${imc.toFixed(2)}</p>
                <p>Classificação: ${classificacao}</p>
            `;
        }
    }

    html += `
        <br>
        <button onclick="menuPrincipal()">
            0 - Voltar
        </button>
    `;

    app.innerHTML = html;
}

// =====================================
// CONTROLE DE PAGAMENTO
// =====================================

function controlePagamento() {

    let html = `
        <h2>===== CONTROLE DE PAGAMENTO =====</h2>
    `;

    if (alunos.length == 0) {

        html += `
            <p>Nenhum aluno cadastrado!</p>

            <button onclick="menuPrincipal()">
                0 - Voltar
            </button>
        `;

        app.innerHTML = html;
        return;
    }

    for (let i = 0; i < alunos.length; i++) {

        html += `
            <hr>

            <p>
                ${i + 1} - ${alunos[i].nome}
            </p>

            <p>
                Plano:
                ${alunos[i].plano}
                (R$ ${alunos[i].valorPlano})
            </p>

            <p>
                Pagamento:
                ${alunos[i].pagamento}
            </p>
        `;
    }

    html += `
        <p>
            Digite o número do aluno que pagou:
        </p>

        <input
            type="number"
            id="alunoPago"
        >

        <br><br>

        <button onclick="registrarPagamento()">
            Confirmar
        </button>

        <button onclick="menuPrincipal()">
            0 - Voltar
        </button>
    `;

    app.innerHTML = html;
}

// =====================================
// REGISTRAR PAGAMENTO
// =====================================

function registrarPagamento() {

    let escolha = Number(
        document.getElementById(
            "alunoPago"
        ).value
    );

    if (
        escolha >= 1 &&
        escolha <= alunos.length
    ) {

        alunos[
            escolha - 1
        ].pagamento = "Pago";

        alert(
            "Pagamento registrado!"
        );

        controlePagamento();
    }
    else {

        alert(
            "Aluno não encontrado!"
        );
    }
}

// =====================================
// LISTA DE ALUNOS
// =====================================

function listarAlunos() {

    let html = `
        <h2>===== LISTA DE ALUNOS =====</h2>
    `;

    if (alunos.length == 0) {

        html += `
            <p>Nenhum aluno cadastrado!</p>
        `;
    }
    else {

        for (let i = 0; i < alunos.length; i++) {

            html += `
                <hr>

                <p>
                    Nome:
                    ${alunos[i].nome}
                </p>

                <p>
                    Idade:
                    ${alunos[i].idade}
                </p>

                <p>
                    Peso:
                    ${alunos[i].peso}
                </p>

                <p>
                    Altura:
                    ${alunos[i].altura}
                </p>

                <p>
                    Plano:
                    ${alunos[i].plano}
                    (R$
                    ${alunos[i].valorPlano})
                </p>

                <p>
                    Pagamento:
                    ${alunos[i].pagamento}
                </p>
            `;
        }
    }

    html += `
        <br>

        <button onclick="menuPrincipal()">
            0 - Voltar
        </button>
    `;

    app.innerHTML = html;
}

// =====================================
// PLANOS MENSAIS
// =====================================

function mostrarPlanos() {

    app.innerHTML = `
        <h2>
            ===== PLANOS MENSAIS =====
        </h2>

        <pre>
1 - BÁSICO
Musculação
R$ 80 por mês

2 - PREMIUM
Musculação + Aeróbico
R$ 120 por mês

3 - VIP
Acesso total + Personal
R$ 180 por mês
        </pre>

        <button onclick="menuPrincipal()">
            0 - Voltar
        </button>
    `;
}

// =====================================
// INICIAR SISTEMA
// =====================================

menuPrincipal();
