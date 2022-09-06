Mecânicas básicas do jogo:
São a base ou “esqueleto” do jogo, as mecânicas essenciais sobre as quais os sprites são posteriormente adicionados. Programadas com o uso de JavaScript, HTML5 e CSS3.

Setup do projeto:
Criamos a constante canvas (que engloba todo o HTML5 e CSS3 da base do jogo) e c (que aplica o contexto 2D ao canvas). O canvas possui dimensões de 1024 x 576 px, que garantem que o background caiba na maioria das telas de computador.

Jogador e inimigo:

Classe Sprite:
Principal classe do programa, responsável pelos objetos enemy e player. Recebe os argumentos: position (coordenadas x e y que definem onde o objeto está), velocity (que determina a direção e velocidade de movimentação), color (cor do objeto, definida como vermelho por default) e offset (que determina para qual direção o personagem está virado). A classe também possui atributos de largura e altura (100 x 50 px), de “caixa de ataque” (que será mais detalhada no tópico “Ataques”) e vida (definida como 100).

Método draw: 
Desenha os objetos na tela com os métodos fillStyle e fillRect. Também desenha a “caixa de ataque” de cada objeto, na mesma posição que o sprite principal.

Função animate:
Usando o comando window.requestAnimationFrame(animate), fazemos com que, ao chamar a função uma vez, ela se repita em loop. Dessa forma, podemos animar os objetos quadro a quadro. Dentro da função, é executado o método update para os objetos enemy e player, a velocidade dos objetos é alterada caso as teclas de movimentação sejam pressionadas e faz-se a detecção de colisão entre objetos.

Método update:
Faz parte da classe Sprite e é executado em loop dentro de animate. Executa o método draw e modifica as posições do eixo x e y dos objetos, adicionando a velocidade atual a elas. Também é responsável por “puxar” o personagem para baixo caso ele esteja acima do fundo do canvas (pulando), adicionando a constante gravity (0.7) a ele - o que gera um movimento natural, já que a cada quadro o personagem desce mais rápido. Em resumo, determina onde o método draw  deve desenhar os objetos em cada frame.

Determinar movimento:
Usando o comando window.addEventListener duas vezes (uma para detectar quando as teclas são pressionadas e outra para detectar quando são soltas) seguido de uma estrutura switch, definimos qual foi a última tecla pressionada do eixo x e determinamos a velocidade do eixo y (que só usa as teclas ⇧, para inimigo; ’w’, para jogador). Para determinar a velocidade do eixo x, que usa 4 teclas (⇦ ⇨, para inimigo; ‘a’ e ‘d’, para jogador), é preciso garantir qual foi a última tecla pressionada. Depois disso, a determinação de velocidade é feita na função animate. 
A velocidade é adicionada na posição e atualizada a cada frame pelo método update, para que o método draw desenhe os objetos em diferentes posições a cada quadro, gerando seus movimentos.


Ataques:

No código, um ataque ocorre quando a extremidade da ‘caixa de ataque’ de um objeto entra em contato com o outro objeto. 

O contato ocorre se a posição da ‘caixa de ataque’ do objeto estiver dentro da largura e altura do outro objeto em sua respectiva posição. Isso é verificado dentro da função rectangularCollision.

A ‘caixa de ataque’, nomeada no código como attackBox, é a representação visual de um ataque (podendo ser um soco, chute, espada…) e é ativada com a tecla ‘s’, para jogadores, e ⇩, para inimigos. Seus atributos estão na classe Sprite e é desenhada no método draw junto com os demais objetos.

Quando um ataque é bem sucedido (quando uma colisão é detectada), a vida do objeto atacado diminui em 20 pontos. Isso é verificado a cada frame dentro da função animate.

 

Timer e ganhador:
		
Quando uma partida é iniciada, um timer de 60 segundos começa. Esse timer e as barras de vida dos jogadores são divisões de posição absoluta com estilos programados em um documento separado. A barra de vida de cada objeto diminui de forma proporcional ao atributo health (esse processo é feito dentro da função animate). Quando o atributo health de um objeto chega a 0, a função determineWinner é executada.

Função decreaseTimer:
Decrementa a variável timer em 1 a cada segundo e atualiza o timer do jogo com esse valor. Quando timer chega em 0, a decrementação é parada e a função determineWinner é executada.
Função determineWinner:
Interrompe o timer e exibe uma mensagem no canvas que mostra o resultado do jogo. Existem 3 resultados possíveis:

“Tie” -  Quando o atributo health de cada objeto possui o mesmo valor.
“Player 1 Wins” -  Quando o valor do atributo health do objeto player é maior que o de enemy.
“Player 2 Wins” -  Quando o valor do atributo health do objeto enemy é maior que o de player.
