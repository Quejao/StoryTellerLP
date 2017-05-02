
function Area(descricao, opcoes) {
    this.descricao = descricao;
    this.opcoes = opcoes;
}

function Opcao(opcao, resultado, chave) {
    this.opcao = opcao;
    this.resultado = resultado;
    this.chave = chave;
}

Element.prototype.writeln = function (arg) {
    this.innerHTML += arg;
}

function printGraph() {
    var strGraph = "digraph g { \ngraph [\nrankdir = \"LR\"\n];\nnode [\nfontsize = \"16\"\nshape = \"ellipse\"\n];\nedge [\n];\n";
    var i = 0;
    var j;
    var k;
    for (let p of areas) {
        strGraph += "\"node" + i + "\" [\n";
        strGraph += "label = \" <f0> " + p.nome + " | <f1>";
        j = 1;
        while (j <= 10) {
            strGraph += p.descricao[j];
            j++;
        }
        strGraph += "... ";
        k = 2;
        for (let d of p.opcoes) {
            strGraph += "| <f" + k + "> ";
            j = 2;
            while (j <= 11) {
                strGraph += d.opcao[j];
                j++;
            }
            strGraph += "...";
            k++;
        }
        strGraph += "\"\nshape = \"record\"\n];\n";
        i++;
    }
    i = 0;
    j = 0;
    k = 2;
    var id = 0;
    for (let p1 of areas) {
        j = 0;
        for (let p2 of areas) {
            k = 2;
            for (let d1 of p1.opcoes) {
                if (d1.chave === p2.nome) {
                    strGraph += "\"node" + i + "\":f" + k + " -> \"node" + j + "\":f0 [\n";
                    strGraph += "id = " + id + "\n];\n";
                    id++;
                }
                k++;
            }
            j++;
        }
        i++;
    }
    strGraph += "}";
    console.log(strGraph);
}

function setSalas(data) {
    areas = data;
}

function Print(area) {
    jogoDiv.writeln(area.descricao + "<br><br>");
    var i = 0;
    strCampo = 'campo_' + k;
    while (i < area.opcoes.length) {
        jogoDiv.writeln(area.opcoes[i].opcao + "<br>");
        i++;
    }
    jogoDiv.writeln('<input type="text" id="' + strCampo + '">');
    k++;
    document.getElementById(strCampo).onkeypress = function (e) {
        if (e.keyCode === 13) {
            campo = document.getElementById(strCampo).value;
            jogoDiv.innerHTML = "";
            Escolha(area, campo);
            e.preventDefault();
        }
    };
}

function Escolha(area, op) {
    if (op <= 0 || op > area.opcoes.length) {
        jogoDiv.writeln("<br>Opção inválida!<br>");
        Print(area);
        return;
    }
    op--;

    //recomeça o jogo
    if (area.opcoes[op].chave === "refresh") {
        location.reload();
    }
    jogoDiv.writeln("<br>" + area.opcoes[op].resultado + "<br><br>");
    salaAtual = area.opcoes[op].chave;
    //controle das musicas
    {
        if (salaAtual === 'floresta') {
            document.getElementById('background').muted = true;
            document.getElementById('battle1').autoplay = true;
        }
        if (salaAtual === 'floresta2') {
            document.getElementById('background').muted = false;
            document.getElementById('battle1').muted = true;
        }
        if (salaAtual === 'esquerda') {
            document.getElementById('background').muted = true;
            document.getElementById('battle').autoplay = true;
        }
        if (salaAtual === 'vitoria') {
            document.getElementById('background').muted = true;
            document.getElementById('battle').muted = true;
            document.getElementById('victory').autoplay = true;
            printGraph();
        }
        if (salaAtual === 'derrota') {
            document.getElementById('background').muted = true;
            document.getElementById('battle').muted = true;
            document.getElementById('defeat').autoplay = true;
            document.getElementById('battle1').muted = true;
            printGraph();
        }
    }

    for (let p of areas) {
        if (p.nome === salaAtual) {
            Print(p);
        }
    }
}

var jogoDiv = document.getElementById('jogo');
var k = 1;
var strCampo;
var flag = false;

//criação da lista de areas
var areas = [];