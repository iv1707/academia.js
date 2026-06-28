let alunos = [];

const app = document.getElementById("app");

// =========================
// Menu principal
// =========================
function menuPrincipal() {

    app.innerHTML = `
        <h2>===== ACADEMIA =====</h2>

        <button onclick="mostrarCadastro()">
            1 - Cadastrar Alunos
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

// =========================
// Tela de cadastro
// =========================
function mostrarCadastro() {

    app.innerHTML = `
        <h2>Cadastro de Alunos</h2>

        <p>Nome:</p>
        <input id="nome">

        <p>Idade:</p>
        <input id="idade" type="number">

        <p>Peso (kg):</p>
        <input id="peso" type="number">

        <p>Altura (m):</p>
        <input id="altura" type="number" step="0.01">

        <p>Plano:</p>

        <select id="plano">
            <option value="1">Básico - R$ 80</option>
            <option value="2">Premium - R$ 120</option>
            <option value="3">VIP - R$ 180</option>
        </select>

        <br><br>

        <button onclick="cadastrarAluno()">
            Salvar Aluno
        </button>

        <button onclick="menuPrincipal()">
            Voltar
        </button>
    `;
}

// =========================
// Cadastrar aluno
// =========================
function cadastrarAluno() {

    let nome = document.getElementById("nome").value;

    let idade = Number(
        document.getElementById("idade").value
    );

    let peso = Number(
        document.getElementById("peso").value
    );

    let altura = Number(
        document.getElementById("altura").value
    );

    let opcPlano =
        document.getElementById("plano").value;

    if (
        nome == "" ||
        idade <= 0 ||
        peso <= 0 ||
        altura <= 0
    ) {

        alert("Preencha todos os campos!");

        return;
    }

    let plano = "";
    let valorPlano = 0;

    if (opcPlano == "1") {

        plano = "Básico";
        valorPlano = 80;

    }
    else if (opcPlano == "2") {

        plano = "Premium";
        valorPlano = 120;

    }
    else {

        plano = "VIP";
        valorPlano = 180;
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

    menuPrincipal();
}

// =========================
// Consultar IMC
// =========================
function consultarIMC() {

    let html = `
        <h2>Consulta de IMC</h2>
    `;

    if (alunos.length == 0) {

        html += `
            <p>Nenhum aluno cadastrado.</p>
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

                <p>
                    <b>${alunos[i].nome}</b>
                </p>

                <p>
                    IMC:
                    ${imc.toFixed(2)}
                </p>

                <p>
                    ${classificacao}
                </p>
            `;
        }
    }

    html += `
        <br>

        <button onclick="menuPrincipal()">
            Voltar
        </button>
    `;

    app.innerHTML = html;
}

// =========================
// Controle de pagamento
// =========================
function controlePagamento() {

    let html = `
        <h2>Controle de Pagamento</h2>
    `;

    if (alunos.length == 0) {

        html += `
            <p>Nenhum aluno cadastrado.</p>
        `;
    }
    else {

        for (let i = 0; i < alunos.length; i++) {

            html += `
                <hr>

                <p>
                    <b>${alunos[i].nome}</b>
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

                <button onclick="registrarPagamento(${i})">
                    Marcar como Pago
                </button>
            `;
        }
    }

    html += `
        <br><br>

        <button onclick="menuPrincipal()">
            Voltar
        </button>
    `;

    app.innerHTML = html;
}

// =========================
// Registrar pagamento
// =========================
function registrarPagamento(indice) {

    alunos[indice].pagamento = "Pago";

    alert("Pagamento registrado com sucesso!");

    controlePagamento();
}

// =========================
// Lista de alunos
// =========================
function listarAlunos() {

    let html = `
        <h2>Lista de Alunos</h2>
    `;

    if (alunos.length == 0) {

        html += `
            <p>Nenhum aluno cadastrado.</p>
        `;
    }
    else {

        for (let i = 0; i < alunos.length; i++) {

            html += `
                <hr>

                <p>
                    <b>Nome:</b>
                    ${alunos[i].nome}
                </p>

                <p>
                    <b>Idade:</b>
                    ${alunos[i].idade}
                </p>

                <p>
                    <b>Peso:</b>
                    ${alunos[i].peso} kg
                </p>

                <p>
                    <b>Altura:</b>
                    ${alunos[i].altura} m
                </p>

                <p>
                    <b>Plano:</b>
                    ${alunos[i].plano}
                    (R$ ${alunos[i].valorPlano})
                </p>

                <p>
                    <b>Pagamento:</b>
                    ${alunos[i].pagamento}
                </p>
            `;
        }
    }

    html += `
        <br><br>

        <button onclick="menuPrincipal()">
            Voltar
        </button>
    `;

    app.innerHTML = html;
}

// =========================
// Planos mensais
// =========================
function mostrarPlanos() {

    app.innerHTML = `
        <h2>Planos Mensais</h2>

        <hr>

        <h3>1 - Básico</h3>

        <p>
            Musculação
        </p>

        <p>
            R$ 80 por mês
        </p>

        <hr>

        <h3>2 - Premium</h3>

        <p>
            Musculação + Aeróbico
        </p>

        <p>
            R$ 120 por mês
        </p>

        <hr>

        <h3>3 - VIP</h3>

        <p>
            Acesso total + Personal
        </p>

        <p>
            R$ 180 por mês
        </p>

        <br>

        <button onclick="menuPrincipal()">
            Voltar
        </button>
    `;
}

// =========================
// Iniciar sistema
// =========================
menuPrincipal();
