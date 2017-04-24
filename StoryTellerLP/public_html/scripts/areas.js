function Area(descricao, opcoes) {
    this.descricao = descricao;
    this.opcoes = opcoes;
}

function Opcao(opcao, resultado, chave) {
    this.opcao = opcao;
    this.resultado = resultado;
    this.chave = chave;
}

Element.prototype.writeln = function(arg) {
    this.innerHTML += arg;
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
            Escolha(areas[salaAtual], campo);
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
    jogoDiv.writeln("<br>" + area.opcoes[op].resultado + "<br><br>");
    salaAtual = area.opcoes[op].chave;
    Print(areas[salaAtual]);
}

var jogoDiv = document.getElementById('jogo');
var k = 1;
var strCampo;
var flag = false;

//criação das salas
{
//rua de inicio do jogo
    {
        var ruaIni = new Area(
                "*Você acorda desorientado, na rua principal da cidade.\n\
                Você se levanta do chão com dificuldade. Como cavaleiro que é, você precisa descobrir o que \n\
                aconteceu. Subindo a rua está o castelo, descendo-a está a floresta.",
                [
                    new Opcao("1)Seguir para o Castelo", "Você pega sua espada e escudo e direciona-se para o castelo...", "castelo"),
                    new Opcao("2)Dirigir-se à floresta", "Você pega sua espada e escudo e vai em direção à floresta...", "floresta")
                ]
                );
    }
//mesma rua do inicio, com uma descrição diferente para não dar uma sensação estranha
    {
        var rua = new Area(
                "*Você chega à rua onde despertou. É possível dirigir-se ao Castelo ou à floresta.",
                [
                    new Opcao("1)Seguir para o Castelo", "Você se direciona para o castelo...", "castelo"),
                    new Opcao("2)Dirigir-se à floresta", "Você vai em direção à floresta...", "floresta")
                ]
                );
    }
//castelo
    {
        var castelo = new Area(
                "*Aproximando-se da fachada do Castelo \n\
                é possível ver que uma das torres foi completamente destruída e há fumaça escapando pelas fendas visíveis após a \n\
                destruição.<br>Não há guardas e nenhum ser visível. Olhando ao seu redor, você vê a porta para o hall de entrada \n\
                e o caminho para o pátio do castelo.",
                [
                    new Opcao("1)Ir para o hall", "Você passa pela porta destruída e entra pelo hall do castelo...", "hall"),
                    new Opcao("2)Ir para o pátio do castelo", "Você segue até o pátio do castelo, \n\
                        pelo caminho com escombros...", "patio"),
                    new Opcao("3)Volta à rua principal", "Você volta pelo caminho até a rua onde acordou...", "rua")
                ]
                );
    }
//hall do castelo
    {
        var hall = new Area(
                "*O odor da morte é o primeiro a atingir seus sentidos. A visão do ambiente é desoladora. \n\
                É possível ver alguns de seus companheiros, cavaleiros assim como você, ou o que sobrou \n\
                de seus corpos...Você percebe que alguns dos corpos são grotescos e monstruosos. A cena \n\
                acaba por abalar seu espírito por um momento. A sua frente está a porta para a sala do trono, \n\
                a sua esquerda a escada para a torre de vigia.",
                [
                    new Opcao("1)Ir para a sala do trono", "Você adentra a sala do trono...", "trono"),
                    new Opcao("2)Ir para a torre de vigia", "Você sobe as escadas até a torre de vigia...", "torre"),
                    new Opcao("3)Volta à entrada do castelo", "Você pela porta e vai a entrada do castelo...", "castelo")
                ]
                );
    }
//sala do trono
    {
        var trono = new Area(
                "*A primeira visão é do Trono... O brilho escarlate atinge seus olhos graças à luz que \n\
                entra no ambiente destruído e você observa o semblante vazio de vida do Rei. Os sinais de \n\
                batalha são menos evidentes aqui. Não há sinal da Princesa nesse cômodo. A fúria domina \n\
                seus sentimentos.",
                [
                    new Opcao("1)Investigar a salar", "Ao investigar o falecido Rei, \n\
                        você observa que apesar dos ferimentos superficiais, seu corpo possui \n\
                        grotescas marcas de queimadura. Algo tão potente que foi capaz \n\
                        de derreter sua coroa dourada. Nesse instante, você compreende que \n\
                        isso não poderia ser causada por uma chama normal, mas alguma poderosa magia.", "trono"),
                    new Opcao("2)Voltar ao hall", "Você se vira e deixa a sala", "hall")
                ]
                );
    }
//torre de vigia
    {
        var torre = new Area(
                "*O ambiente vazio apenas proporciona uma visão da floresta, cujas árvores \n\
                também cederam, além de um pouco de fumaça no meio da mata. Não há muito para se encontrar neste local.",
                [
                    new Opcao("1)Ir para o hall", "Você desce até o hall...", "hall"),
                    new Opcao("2)Ir para o pátio", "Você desce até o pátio...", "patio")
                ]
                );
    }
//patio do castelo
    {
        var patio = new Area(
                "*Não há sinal de vida por aqui. Mais companheiros podem ser encontrados \n\
                e todos sofreram um fim terrível pela expressão em seus rostos. O medo e desespero \n\
                ainda são visíveis na frieza de seus olhos. Você observa a torre de vigia a uma certa distância.",
                [
                    new Opcao("1)Subir para a torre", "Você sobe até o topo da torre...", "torre"),
                    new Opcao("2)Voltar para a entrada do castelo", "Você volta para a fachada do castelo...", "castelo")
                ]
                );
    }
//entrada da floresta(batalha)
    {
        var floresta = new Area(
                "*O silêncio é interrompido com o som inconfundível de criaturas vis e impuras. \n\
                3 Goblins se aproximam de você com armas em posição. O mais alto grunhe em uma linguagem incompreensível \n\
                e você logo percebe que a batalha é iminente. Você decide então que atacar é a melhor estratégia.",
                [
                    new Opcao("1)Atacar, em um pulo, de cima para baixo", "Você levanta sua espada e desce \n\
                em um movimento rápido e poderoso dividindo em dois o Goblin posicionado mais à esquerda do grupo. \n\
                Contudo você percebe que a lâmina acaba ficando presa no corpo sem vida do inimigo. Percebendo sua \n\
                falha, um dos Goblins corre em sua direção e investe a lâmina da adaga logo abaixo de seu braço direito \n\
                e nesse instante você solta a espada. O Goblin restante então, profere um último grunhido e salta em sua \n\
                direção apunhalando seu rosto com a pequena lâmina. Ambas criaturas começam a pular sobre seu corpo \n\
                fincando adagas em seu peito, pernas, olhos, pescoço e você sente a vida se esvaindo de seu corpo. \n\
                Até que a luz se esvai de seus olhos...", "morte"),
                    new Opcao("2)Atacar com uma estocada", "Você se adianta em direção ao grupo de inimigos e com uma \n\
                poderosa estocada atinge o peito do Goblin do meio. Ele sorri e você observa então a desproporcionalidade do equipamento das\n\
                criaturas. A repulsa invade seu olhar ao perceber que aquelas criaturas impuras roubaram todo o possível dos corpos dos soldados \n\
                do Castelo. Ainda que muito desproporcional, o Goblin do meio, equipava-se com uma das cotas de malha revestidas de aço, \n\
                muito usadas pelos soldados reais. Aproveitando sua falha, o Goblin à direita investe a lâmina de sua adaga em seu pescoço enquanto\n\
                aquele à sua esquerda corta seu calcanhar direito. Acostumados a inimigos maiores, os Goblins sabem muito bem como derrubar um soldado \n\
                quando estão em maior número. Cercado de inimigos, você\n\
                sucumbe ao frio chamado da morte enquanto ouve o mar de guinchos e gargalhadas das criaturas malignas...", "morte"),
                    new Opcao("3)Atacar em arco", "Você avança para cima dos Goblins em um ataque repentino, fruto de anos de treinamento. \n\
                A lâmina rasga o peito do Goblin mais à esquerda, que agoniza e cai de joelhos sem vida. O Goblin à direita tenta evitar o ataque posicionando \n\
                sua adaga numa tentativa desesperada de interromper o poderoso ataque. Sua lâmina, contudo, atravessa a frágil adaga e separa corpo \n\
                de ca- beça da vil criatura. O inimigo restante consegue saltar para trás no momento do ataque apenas para ver seus aliados serem \n\
                destruídos em apenas um golpe e com desespero, foge floresta adentro...", "floresta2")
                ]
                );
    }
//entrada da floresta2(pós batalha)
    {
        var floresta2 = new Area(
                "*Após ser possível apenas ouvir os passos apressados do Goblin fugitivo, você observa sinais \n\
        incomuns que indicam que algo atravessou a floresta naquela direção. Além disso, é possível ver que a \n\
        estrada principal apresenta rastros interessantes ao longo de sua extensão visível.",
                [
                    new Opcao("1)Seguir pela estrada", "Continuando pela estrada, você segue até \n\
                    chegar a uma clareira...", "clareira"),
                    new Opcao("2)Adentrar a mata", "Você entra pela mata com cuidado...", "mata")
                ]
                );
    }
//clareira
    {
        var clareira = new Area(
                "*Na clareira, é possível ver um penhasco. A ponte foi destruída, impossibilitando \n\
                a passagem. Seus instintos são fortes em relação àquele local. É possível sentir que o penhasco \n\
                ou talvez a ponte talvez possam prover pistas sobre o que atacou o Castelo e quais inimigos você \n\
                poderá encontrar.",
                [
                    new Opcao("1)Investigar a Ponte", "Você se aproxima das madeiras que seguravam \n\
                    a ponte...<br>Você se aproxima da ponte e recorda-se de que um antigo Mago, implacável, \n\
                    havia auxiliado o Rei na construção daquela ponte, que proveu o caminho mais rápido para \n\
                    as terras do reino vizinho em caso de perigo. Assim como fez com o castelo, o Mago alertou \n\
                    a todos que apenas uma magia antiga e digna de um ser ou criatura muito poderoso poderia \n\
                    destruir aquilo que ele havia criado.", "clareira"),
                    new Opcao("2)Olhar penhasco", "Você se aproxima do penhasco e observa a \n\
                    queda íngreme e o vazio escuro que praticamente emana de seu fundo. Perdido em seus \n\
                    pensamentos, você não percebe a instabilidade do terreno. A terra cede e você cai no abismo \n\
                    da morte, para nunca mais ser visto novamente.", "morte"),
                    new Opcao("3)Voltar à floresta", "Você entra pela mata com cuidado...", "floresta2")
                ]
                );
    }
//mata da floresta
    {
        var mata = new Area(
                "*Adentrando na Floresta você caminha por alguns minutos até que o odor da morte toma \n\
                seus sentidos novamente. Dezenas de corpos, alguns sem vida há muitos anos e outros cujo terror \n\
                e desespero no olhar ainda dão a sensação de que acabaram de perder o brilho da vida, estão \n\
                espalhados e desfigurados próximos a entrada de uma caverna. Ao se aproximar da caverna é possível \n\
                ouvir pequenos barulhos e o cheiro de sangue e putridão aumentam cada vez mais.",
                [
                    new Opcao("1)Entrar na caverna", "Você se aproxima das madeiras que seguravam a ponte...", "caverna"),
                    new Opcao("2)Voltar mata a fora", "Você se vira e volta para a floresta...", "floresta2")
                ]
                );
    }
//caverna
    {
        var caverna = new Area(
                "*A caverna é escura e úmida. Ao adentrar naquele ambiente você sente uma presença \n\
                inigualável. Logo observa que a caverna se divide em uma bifurcação. O caminho da direita \n\
                aparenta ser mais escuro e sombrio. A passagem para a esquerda parece possuir uma precária \n\
                iluminação ao fundo. Seu instinto está em chamas e sua razão deve prevalescer nesta descisão.",
                [
                    new Opcao("1)Seguir pela direita", "Você segue pelo caminho da direita...", "direita"),
                    new Opcao("2)Seguir pela esquerda", "Você segue o caminha da esquerda...", "esquerda"),
                    new Opcao("3)Sair da caverna", "Você vira para sair da caverna...", "esquerda")
                ]
                );
    }
//direita
    {
        var direita = new Area(
                "*O caminho escuro acaba direcionando você para cima, em uma subida suave e \n\
                sombria. Você observa que está em um nível relativamente mais alto naquela câmara e \n\
                daquele local consegue observar uma pequena luz fraca de uma tocha no fundo daquele \n\
                local. Sobre algum tipo de altar de sacrifícios você vê uma nova esperança. A Princesa \n\
                está aparentemente desmaiada sobre a mesa rochosa como que a espera de alguém \n\
                bravo e poderoso o suficiente para salvá-la. Abaixo do local onde você está, \n\
                uma gigantesca criatura respira pesadamente em um sono visivelmente profundo. \n\
                Seu corpo robusto se alonga em uma cauda enorme e coberta de adornos que mais \n\
                se parecem com espinhos. Seu corpo escamado brilha com a tremeluzente iluminação \n\
                da tocha. Grandes asas são projetadas de suas costas e as patas imensas terminam em longas \n\
                garras mais afiadas que qualquer lâmina feita pelo homem. A cabeça do monstro está \n\
                inclinada sobre as patas e seus olhos permanecem ocultos sobre as pálpebras. Um ataque aério pode \n\
                ser muito eficaz, porém, se errá-lo dessa altura, pode significar uma grande queda que dificultaria \n\
                ainda uma batalha com a criatura",
                [
                    new Opcao("1)Ataque aéro", "Todo o ódio, fúria e tristeza pelos companheiros \n\
                    perdidos, Rei assassinado e Reino desolado caem sobre suas costas. Você entende a necessidade \n\
                    daquele ato e vê que aquela criatura causou muito mal não só a você, mas também a centenas de \n\
                    pessoas. O Dragão precisa ser eliminado. Você empunha sua espada e compreende seu peso de uma \n\
                    maneira que nunca compreendera antes. Olhando para aquela arma você pede um sinal aos deuses \n\
                    para ter certeza de que aquela era sua missão e se teria forças para lutar até o fim. Por um \n\
                    breve momento, a lâmina brilha de maneira surpreendente. Você não tem certeza se foi apenas \n\
                    um reflexo da luz da tocha, mas sente que aquele é o momento. Com a espada em mãos você \n\
                    finalmente salta daquela superfície mais alta. Tudo que se ouve é um som incomparável, algo \n\
                    como um urro violento de dor. Sua espada atravessa a cabeça do Dragão e ele urra de dor. Preso \n\
                    ao chão a besta tenta se mover, mas com um último brilho de chamas de sua boca cerrada pela \n\
                    espada que atravessa sua cabeça, o monstro fica imóvel e a vida sombria se esvai de seus olhos. \n\
                    Você retira a espada, cuja lâmina brilha escarlate graças ao fogo de Dragão e se direciona à \n\
                    Princesa. Com o som da batalha, a Princesa acorda assustada. Seus olhos buscam explicação e \n\
                    conforto, até que encontram o olhar de seu salvador...", "morte_dragao"),
                    new Opcao("2)Voltar para a bifurcação", "Você volta pelo caminho até a bifurcação..", "caverna")
                ]
                );
    }
//esqueda
    {
        var esquerda = new Area(
                "*A passagem o leva até uma câmara imensa. O teto é escuro e impossível de se \n\
                enxergar. Luz se esgueira de uma pequena tocha no fundo da caverna e seus olhos brilham ao \n\
                encontrarem a Princesa, desvanecida, sobre algo que aparenta ser uma mesa feita de rocha, \n\
                algo como um altar de sacrifícios. Contudo, a felicidade dura poucos instantes... Entre a \n\
                Princesa e você é possível ver uma criatura dantesca... Seu corpo robusto se alonga em uma \n\
                cauda enorme e coberta de adornos que mais se parecem com espinhos. Seu corpo escamado brilha \n\
                com a luz tremeluzente da tocha. Grandes asas são projetadas de suas costas e as patas imensas \n\
                terminam em longas garras mais afiadas que qualquer lâmina feita pelo homem. A cabeça do monstro \n\
                está inclinada sobre as patas e seus olhos permanecem fechados enquanto uma pesada respiração enche \n\
                a sala com o terror daquela visão. O Dragão permanece em seu sono e você precisa decidir o que fazer \n\
                antes que ele desperte. Você pode atacá-lo enquanto dorme num ataque surpresa, pode espreitar-se e \n\
                tentar resgatar a Princesa furtivamente ou pode deixar aquele local e voltar para o cômodo anterior \n\
                da caverna.",
                [
                    new Opcao("1)Atacar o dragão", "Você segura firmemente sua espada e se prepara para atacar...", "batalha1"),
                    new Opcao("2)Espreitar-se até a princesa", "Você se aproxima do corpo \n\
                    da criatura gigantesca e com passos cuidadosos você consegue se aproximar da Princesa. Ao \n\
                    chegar ao seu alcance, você a segura e tenta erguê-la nos seus ombros para que possa carregá-la \n\
                    para forada caverna. Nesse momento, o Dragão desperta e você está absolutamente indefeso \n\
                    carregando a jovem realeza. A criatura observa com desprezo sua tentativa pífia de recuperar \n\
                    seu precioso prêmio. Ele ruge de modo que toda a caverna estremece. Só é possível vê-lo \n\
                    movimentar a cauda e, com o medo e o arrependimento de sua escolha sobre os ombros, você \n\
                    aguarda o golpe de misericórdia. A impotência e o terror dominam seu corpo e no momento do \n\
                    impacto, seu corpo e o da Princesa unem-se em uma massa indistinguível de carne e ossos.", "morte"),
                    new Opcao("3)Voltar até a bifurcação", "Você vira para a bifurcação caverna ...", "caverna")
                ]
                );
    }
//começo da batalha
    {
        var batalha1 = new Area(
                "*A besta infernal deve pagar por toda a destruição causada e sua morte é uma \n\
            moeda válida. Entendendo seu dever de vingar a morte do Rei e de \n\
            seus companheiros, você empunha sua espada e avança para um ataque mortal e definitivo na garganta \n\
            do Dragão e com toda sua força desce a lâmina em seu pescoço. A espada acerta o Dragão apenas \n\
            para ser repelida pelas poderosas escamas do Dragão. Este desperta de seu sono, incomodado por \n\
            uma ínfima criatura. O monstro levanta seu corpanzil imenso e seu olhar sombrio encontra o \n\
            causador do incômodo. A boca do dragão se incandesce pronta para cuspir uma rajada de fogo. \n\
            Você recua lentamente. Seu instinto de batalha se aflora. O tempo para e você analisa as \n\
            possibilidades para derrotar a besta",
                [
                    new Opcao("1)Defender com o escudo", "A sala se ilumina com as chamas vermelho-alaranjadas \n\
                    expelidas pelo Dragão. Seu escudo derrete em seu braço e seu corpo, assim como a fraca tocha daquela câmara, queima por um breve \n\
                    momento e por fim se apaga, devolvendo aquele lugar às trevas.", "morte"),
                    new Opcao("2)Pular para o lado", "Você salta para o lado, numa tentativa \n\
                    de escapas das chamas, mas a torrente de fogo acerta sua perna...", "batalha2"),
                    new Opcao("3)Rolar para fernte", "Você, rapidamente, rola em direção ao dragão, \n\
                    escapando por muito pouco das chamas, que iluminam todo o interior da caverna, \n\
                    ficando a baixo da cabeça da fera...", "batalha3")
                ]
                );
    }
//batalha após queimar a perna
    {
        var batalha2 = new Area(
                "*Com a perna queimada, você se mantém em pé com dificuldade, encara o dragão enquanto ele \n\
                prepara o próximo golpe. Ao levantar uma de suas grotescas patas, você começa a analisar \n\
                as possibilidades de derrotar a imensurável fera. Com sua percepção, você vê uma falha \n\
                na pata da besta, onde faltam escamas. É possivel ver o mesmo tipo de falha no topo \n\
                de sua cabeça.",
                [
                    new Opcao("1)Atacar a pata do dragão", "Você aguarda o ataque, que vem horizontalmente \n\
                    em sua direção, até que a pata esteja a uma distância que possibilita o golpe certeiro, \n\
                    porém ao desferir o golpe, sua perna falha em manter o apoio e você é arremessado contra \n\
                    a parede da caverna, num impacto fatal.", "morte"),
                    new Opcao("2)Pular para perto da cabeça do dragão", "Pulando pra frente com dificuldade, \n\
                    você desvia do ataque e sobrevive mais alguns instantes, antes da próxima rajada de fogo \n\
                    que está por vir...", "batalha4")
                ]
                );
    }
//batalha após desviar do primeiro ataque
    {
        var batalha3 = new Area(
                "*Ali, você percebe a falta de escamas que a fera tem em sua cabeça. Talvez a espada tenha \n\
                algum efeito nesse lugar.",
                [
                    new Opcao("1)Estocada para cima", "Você atravessa a cabeçorra da fera com sua espada. \n\
                    O sangue escarlate jorra da ferida enquando o dragão solta um urro de dor e agônia, seu \n\
                    ultimo ato antes de cair sem vida. Você corre em direção a princesa, ainda adormecida, \n\
                    para finalmente tira-la da escurição e putridão dessa caverna...", "morte_dragao"),
                    new Opcao("2)Corte horizontal para cima", "Ao preparar o golpe, você vacila por um \n\
                    momento. Aquele momento foi suficiente para o dragão se preparar para o seu golpe. \n\
                    Ele abocanha sua espada, levando junto sua mão. Junto com a dor de perder uma das mãos \n\
                    e ao fato de não ter mais uma arma, seu coração sucumbe ao desespero, te deixando \n\
                    totalmente paralisado de medo, tornando-lhe um alvo fácil para a ultima rajada de fogo \n\
                    do dragão...", "morte")
                ]
                );
    }
//batalha após desviar da patada
    {
        var batalha4 = new Area(
                "*Com sua boca encandecendo-se, o dragão se prepara para mais uma rajada de chamas, \n\
                abaixando sua cabeça próxima ao chão. Você está a uma distância bem próxima a cabeça da \n\
                fera, porém sua perna queimada dificultará um próximo ataque. Você pensa em arremessar sua \n\
                espada, mas se isso falhar, você perderá sua arma.",
                [
                    new Opcao("1)Atacar a cabeça", "Você vai em direção ao dragão, mas no segundo passo \n\
                    sua perna falha em sustentar seu corpo e te derruba no chão, o que parece uma queda \n\
                    eterna. Você lembra de todos os companheiros que morreram e sua vida passa diante de seus \n\
                    olhos. Quando finalmente encontro o chão frio, a torrente infernal encontra seu corpo \n\
                    carbonizando-o totalmente...", "morte"),
                    new Opcao("2)Lançar espada", "Com toda a força que lhe resta, você joga sua espada em \n\
                    direção à cabeça do mostro acertando em cheio o meio de seus olhos, poucos instantes \n\
                    antes de soltar suas chamas, com a angústia da fera, você tem a oportunidade de finalizar \n\
                    o ataque, terminando de enfiar a espada na cabeça do dragão. Já sem energias você \n\
                    você desmaia na caverna. Ao abrir os olhos você vê a princesa, ajoelhada ao seu lado \n\
                    chacolhando-o gentilmente para te reanimar...", "morte_dragao")
                ]
                );
    }
//derrota
    {
        var derrota = new Area(
                "Fim de jogo!",
                [
                    new Opcao("1)Recomeçar?", "", "ruaIni")
                ]
                );
    }
//vitoria
    {
        var vitoria = new Area(
                "*Juntos, você a Princesa dirigem-se a saída da caverna e às ruínas do Castelo. A Princesa, \n\
                única sobrevivente da família real, torna-se Rainha daquelas terras e você, seu Chefe da Guarda Real. \n\
                Também conhecido como o Poderoso Matador de Dragões.<br><br>Parabéns, você terminou o jogo!",
                [
                    new Opcao("1)Recomeçar?", "", "ruaIni")
                ]
                );
    }
}

//criação da lista de areas
{
    areas = [];
    areas['ruaIni'] = ruaIni;
    areas['rua'] = rua;
    areas['castelo'] = castelo;
    areas['hall'] = hall;
    areas['patio'] = patio;
    areas['trono'] = trono;
    areas['torre'] = torre;
    areas['floresta'] = floresta;
    areas['floresta2'] = floresta2;
    areas['clareira'] = clareira;
    areas['mata'] = mata;
    areas['caverna'] = caverna;
    areas['direita'] = direita;
    areas['esquerda'] = esquerda;
    areas['batalha1'] = batalha1;
    areas['batalha2'] = batalha2;
    areas['batalha3'] = batalha3;
    areas['morte'] = derrota;
    areas['morte_dragao'] = vitoria;
}

//começo do jogo
{
    salaAtual = 'ruaIni';
    jogoDiv.writeln("Destruição, fogo e escombros...<br>Memórias perdidas em meio ao \n\
        despertar pós-batalha. Sua cidade está em ruínas e não há ninguém por perto." + "<br><br>");
    Print(areas[salaAtual]);
}