var form = document.getElementById(strForm);
var campo = document.getElementById(strCampo);

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(campo.value);

    // impede o envio do form
    e.preventDefault();
});

function Acentuar(mensagem)
{
    var i = 0;
    while (i < mensagem.length) {
        mensagem = mensagem.replace('á', '\u00e1');
        mensagem = mensagem.replace('à', '\u00e0');
        mensagem = mensagem.replace('â', '\u00e2');
        mensagem = mensagem.replace('ã', '\u00e3');
        mensagem = mensagem.replace('ä', '\u00e4');
        mensagem = mensagem.replace('Á', '\u00c1');
        mensagem = mensagem.replace('À', '\u00c0');
        mensagem = mensagem.replace('Â', '\u00c2');
        mensagem = mensagem.replace('Ã', '\u00c3');
        mensagem = mensagem.replace('Ä', '\u00c4');
        mensagem = mensagem.replace('é', '\u00e9');
        mensagem = mensagem.replace('è', '\u00e8');
        mensagem = mensagem.replace('ê', '\u00ea');
        mensagem = mensagem.replace('ê', '\u00ea');
        mensagem = mensagem.replace('É', '\u00c9');
        mensagem = mensagem.replace('È', '\u00c8');
        mensagem = mensagem.replace('Ê', '\u00ca');
        mensagem = mensagem.replace('Ë', '\u00cb');
        mensagem = mensagem.replace('í', '\u00ed');
        mensagem = mensagem.replace('ì', '\u00ec');
        mensagem = mensagem.replace('î', '\u00ee');
        mensagem = mensagem.replace('ï', '\u00ef');
        mensagem = mensagem.replace('Í', '\u00cd');
        mensagem = mensagem.replace('Ì', '\u00cc');
        mensagem = mensagem.replace('Î', '\u00ce');
        mensagem = mensagem.replace('Ï', '\u00cf');
        mensagem = mensagem.replace('ó', '\u00f3');
        mensagem = mensagem.replace('ò', '\u00f2');
        mensagem = mensagem.replace('ô', '\u00f4');
        mensagem = mensagem.replace('õ', '\u00f5');
        mensagem = mensagem.replace('ö', '\u00f6');
        mensagem = mensagem.replace('Ó', '\u00d3');
        mensagem = mensagem.replace('Ò', '\u00d2');
        mensagem = mensagem.replace('Ô', '\u00d4');
        mensagem = mensagem.replace('Õ', '\u00d5');
        mensagem = mensagem.replace('Ö', '\u00d6');
        mensagem = mensagem.replace('ú', '\u00fa');
        mensagem = mensagem.replace('ù', '\u00f9');
        mensagem = mensagem.replace('û', '\u00fb');
        mensagem = mensagem.replace('ü', '\u00fc');
        mensagem = mensagem.replace('Ú', '\u00da');
        mensagem = mensagem.replace('Ù', '\u00d9');
        mensagem = mensagem.replace('Û', '\u00db');
        mensagem = mensagem.replace('ç', '\u00e7');
        mensagem = mensagem.replace('Ç', '\u00c7');
        mensagem = mensagem.replace('ñ', '\u00f1');
        mensagem = mensagem.replace('Ñ', '\u00d1');
        mensagem = mensagem.replace('&', '\u0026');
        mensagem = mensagem.replace('\'', '\u0027');
        i++;
    }

    return mensagem;
}

function Area(descricao, opcoes) {
    this.descricao = descricao;
    this.opcoes = opcoes;
}

function Opcao(opcao, resultado, chave) {
    this.opcao = opcao;
    this.resultado = resultado;
    this.chave = chave;
}

function Print(area) {
    document.writeln(area.descricao + "<br>");
    var i = 0;
    strCampo = 'campo_' + k;
    strForm = 'formulario_' + k;
    while (i < area.opcoes.length) {
        document.writeln(area.opcoes[i].opcao + "<br>");
        i++;
    }
    document.write('<form id="'+strForm+'">\n\
                        <input type="text" id="' + strCampo + '">\n\
                        <input type="submit" value="Enviar"><br>\n\
                    </form>');
    k++;
}

function Escolha(area, op) {
    if (op <= 0 || op > area.opcoes.length) {
        document.writeln(Acentuar("Opção inválida!<br>"));
        Print(area);
        return;
    }
//    if(area.opcoes[op].chave === "morte"){
//        document.writeln("Game Over!<br>");
//        return;
//    }
    op--;
    document.writeln(area.opcoes[op].resultado + "<br>");
    salaAtual = area.opcoes[op].chave;
    Print(areas[salaAtual]);
}

var k = 1;
var strCampo, strForm;
var flag = true;


{//criação das salas
    {
        var ruaIni = new Area(
                Acentuar("*Você acorda desorientado, na rua principal da cidade.\n\
                Você se levanta do chão com dificuldade e olha os possíveis caminhos a se seguir. \n\
                Seguindo rua à cima está o castelo e rua à baixo está a floresta."),
                [
                    new Opcao("1)Seguir para o Castelo", Acentuar("Você se direciona para o castelo..."), "castelo"),
                    new Opcao(Acentuar("2)Dirigir-se à floresta"), Acentuar("Você vai em direção à floresta..."), "floresta")
                ]
                );
    }
    {
        var rua = new Area(
                Acentuar("*Você chega à rua onde despertou. É possível dirigir-se ao Castelo ou à floresta."),
                [
                    new Opcao("1)Seguir para o Castelo", Acentuar("Você se direciona para o castelo..."), "castelo"),
                    new Opcao(Acentuar("2)Dirigir-se à floresta"), Acentuar("Você vai em direção à floresta..."), "floresta")
                ]
                );
    }
    {
        var castelo = new Area(
                Acentuar("*Aproximando-se da fachada do Castelo \n\
                é possível ver que uma das torres foi completamente destruída e há fumaça escapando pelas fendas visíveis após a \n\
                destruição.<br>Não há guardas e nenhum ser visível. Olhando ao seu redor, você vê a porta para o hall de entrada \n\
                e o caminho para o pátio do castelo."),
                [
                    new Opcao("1)Ir para o hall", Acentuar("Você passa pela porta destruída e entra pelo hall do castelo..."), "hall"),
                    new Opcao(Acentuar("2)Ir para o pátio do castelo"), Acentuar("Você segue até o pátio do castelo, \n\
                        pelo caminho com escombros..."), "patio"),
                    new Opcao(Acentuar("3)Volta à rua principal"), Acentuar("Você volta pelo caminho até a rua onde acordou..."), "rua")
                ]
                );
    }
    {
        var hall = new Area(
                Acentuar("*O odor da morte é o primeiro a atingir seus sentidos. A visão do ambiente é desoladora. \n\
                É possível ver alguns de seus companheiros, cavaleiros assim como você, ou o que sobrou \n\
                de seus corpos...Você percebe que alguns dos corpos são grotescos e monstruosos. A cena \n\
                acaba por abalar seu espírito por um momento. A sua frente está a porta para a sala do trono, \n\
                a sua esquerda a escada para a torre de vigia."),
                [
                    new Opcao("1)Ir para a sala do trono", Acentuar("Você adentra a sala do trono..."), "trono"),
                    new Opcao(Acentuar("2)Ir para a torre de vigia"), Acentuar("Você sobe as escadas até a torre de vigia..."), "torre"),
                    new Opcao(Acentuar("3)Volta à entrada do castelo"), Acentuar("Você pela porta e vai a entrada do castelo..."), "castelo")
                ]
                );
    }
    {
        var trono = new Area(
                Acentuar("*A primeira visão é do Trono... O brilho escarlate atinge seus olhos graças à luz que \n\
                entra no ambiente destruído e você observa o semblante vazio de vida do Rei. Os sinais de \n\
                batalha são menos evidentes aqui. Não há sinal da Princesa nesse cômodo. A fúria domina \n\
                seus sentimentos."),
                [
                    new Opcao("1)Investigar a salar", Acentuar("Ao investigar o falecido Rei, \n\
                        você observa que apesar dos ferimentos superficiais, seu corpo possui \n\
                        grotescas marcas de queimadura. Algo tão potente que foi capaz \n\
                        de derreter sua coroa dourada. Nesse instante, você compreende que \n\
                        isso não poderia ser causada por uma chama normal, mas alguma poderosa magia."), "trono"),
                    new Opcao("2)Voltar ao hall", Acentuar("Você se vira e deixa a sala"), "hall")
                ]
                );
    }

    {
        var floresta = new Area(
                Acentuar("*O silêncio é interrompido com o som inconfundível de criaturas vis e impuras. \n\
                3 Goblins se aproximam de você com armas em posição. O mais alto grunhe em uma linguagem incompreensível \n\
                e você logo percebe que a batalha é iminente. Você decide então que atacar é a melhor estratégia."),
                [
                    new Opcao("1)Atacar, em um pulo, de cima para baixo", Acentuar("Você levanta sua espada e desce \n\
                em um movimento rápido e poderoso dividindo em dois o Goblin posicionado mais à esquerda do grupo. \n\
                Contudo você percebe que a lâmina acaba ficando presa no corpo sem vida do inimigo. Percebendo sua \n\
                falha, um dos Goblins corre em sua direção e investe a lâmina da adaga logo abaixo de seu braço direito \n\
                e nesse instante você solta a espada. O Goblin restante então, profere um último grunhido e salta em sua \n\
                direção apunhalando seu rosto com a pequena lâmina. Ambas criaturas começam a pular sobre seu corpo \n\
                fincando adagas em seu peito, pernas, olhos, pescoço e você sente a vida se esvaindo de seu corpo. \n\
                Até que a luz se esvai de seus olhos..."), "morte"),
                    new Opcao(Acentuar("2)Atacar com uma estocada"), Acentuar("Você se adianta em direção ao grupo de inimigos e com uma \n\
                poderosa estocada atinge o peito do Goblin do meio. Ele sorri e você observa então a desproporcionalidade do equipamento das\n\
                criaturas. A repulsa invade seu olhar ao perceber que aquelas criaturas impuras roubaram todo o possível dos corpos dos soldados \n\
                do Castelo. Ainda que muito desproporcional, o Goblin do meio, equipava-se com uma das cotas de malha revestidas de aço, \n\
                muito usadas pelos soldados reais. Aproveitando sua falha, o Goblin à direita investe a lâmina de sua adaga em seu pescoço enquanto\n\
                aquele à sua esquerda corta seu calcanhar direito. Acostumados a inimigos maiores, os Goblins sabem muito bem como derrubar um soldado \n\
                quando estão em maior número. Cercado de inimigos, você\n\
                sucumbe ao frio chamado da morte enquanto ouve o mar de guinchos e gargalhadas das criaturas malignas..."), "morte"),
                    new Opcao(Acentuar("3)Atacar em arco"), Acentuar("Você avança para cima dos Goblins em um ataque repentino, fruto de anos de treinamento. \n\
                A lâmina rasga o peito do Goblin mais à esquerda, que agoniza e cai de joelhos sem vida. O Goblin à direita tenta evitar o ataque posicionando \n\
                sua adaga numa tentativa desesperada de interromper o poderoso ataque. Sua lâmina, contudo, atravessa a frágil adaga e separa corpo \n\
                de ca- beça da vil criatura. O inimigo restante consegue saltar para trás no momento do ataque apenas para ver seus aliados serem \n\
                destruídos em apenas um golpe e com desespero, foge floresta adentro..."), "arco")
                ]
                );
    }
    {
        var floresta2 = new Area(
                Acentuar("*Após ser possível apenas ouvir os passos apressados do Goblin fugitivo, você observa sinais \n\
        incomuns que indicam que algo atravessou a floresta naquela direção. Além disso, é possível ver que a \n\
        estrada principal apresenta rastros interessantes ao longo de sua extensão visível."),
                [
                    new Opcao("1)Seguir pela estrada", Acentuar("Continuando pela estrada, você segue até chegar a uma clareira..."), "estrada"),
                    new Opcao(Acentuar("2)Adentrar a mata"), Acentuar("Você entra pela mata com cuidado..."), "mata")
                ]
                );
    }
}

{//criação da lista de areas
    areas = [];
    areas['ruaIni'] = ruaIni;
    areas['rua'] = rua;
    areas['castelo'] = castelo;
    areas['hall'] = hall;
    areas['trono'] = trono;
    areas['floresta'] = floresta;
    areas['arco'] = floresta2;
}
//começo do jogo
{   
    salaAtual = 'ruaIni';
    document.writeln(Acentuar("Destruição, fogo e escombros...<br>Memórias perdidas em meio ao despertar pós-batalha. Sua cidade está em ruínas e não há ninguém por perto.") + "<br>");
    Print(areas[salaAtual]);
//    while(flag){
//       campo = document.getElementById(str).value;
       Escolha(areas[salaAtual], campo);
//    }
}

document.getElementById(str).onkeypress = function(e) {
    if (e.keyCode === 13) {
        campo = document.getElementById(str).value;
        e.preventDefault();
    }
};