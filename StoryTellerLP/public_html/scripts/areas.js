
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
    graphDiv.writeln("<br><br>digraph g { <br>graph [<br>rankdir = \"LR\<br>];<br>node [<br>fontsize = \"16\"<br>shape = \"ellipse\"<br>];<br>edge [<br>];<br>");
    var i = 0;
    var j;
    var k;
    for (let p of areas) {
        graphDiv.writeln("\"node" + i + "\"[<br>");
        graphDiv.writeln("label = \" \<f0\> " + p.nome + " | <f1>");
        j = 1;
        while (j <= 7) {
            graphDiv.writeln(p.descricao[j]);
            j++;
        }
        graphDiv.writeln("... ");
        k = 2;
        for (let d of p.opcoes) {
            graphDiv.writeln("| <f" + k + "> ");
            j = 2;
            while (j <= 8) {
                graphDiv.writeln(d.opcao[j]);
                j++;
            }
            graphDiv.writeln("... ");
            k++;
        }
        graphDiv.writeln("\"<br> shape = \"record\"<br>];<br>");
        i++;
    }
    i = 0;
    j = 0;
    k = 2;
    var id = 0;
    for (let p1 of areas) {
        j = 0;
        for (let p2 of areas) {
            k = 0;
            for (let d1 of p1.opcoes) {
                if (d1.chave === p2.nome) {
                    graphDiv.writeln("\"node" + i + "\":f" + k + " -> \"node" + j + "\":f0[<br>");
                    graphDiv.writeln("id = " + id + "<br>];<br>");
                    id++;
                }
                k++;
            }
            j++;
        }
        i++;
    }
    graphDiv.writeln("}");
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
    console.log(salaAtual);
    //controle das musicas
    {
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
        }
    }

    for (let p of areas) {
        if (p.nome === salaAtual) {
            Print(p);
        }
    }
}

var jogoDiv = document.getElementById('jogo');
var graphDiv = document.getElementById('graph');
var k = 1;
var strCampo;
var flag = false;

//criação da lista de areas
var areas = [];