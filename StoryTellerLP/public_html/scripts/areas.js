
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

function setSalas(data){
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
        if (salaAtual === 'esquerda') {
            document.getElementById('background').muted = true;
            document.getElementById('battle').autoplay = true;
        }
        if (salaAtual === 'vitoria') {
            document.getElementById('background').muted = true;
            document.getElementById('battle').muted = true;
            document.getElementById('victory').autoplay = true;
        }
        if (salaAtual === 'derrota') {
            document.getElementById('background').muted = true;
            document.getElementById('battle').muted = true;
            document.getElementById('defeat').autoplay = true;
        }
    }
    for(let p of areas){
        if(p.nome === salaAtual)
        Print(p);
    }
}

var jogoDiv = document.getElementById('jogo');
var k = 1;
var strCampo;
var flag = false;

//criação da lista de areas
      var areas = [];