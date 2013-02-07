# Linux JS
Este projeto não é nada sério, é um terminal baseando em Linux feito puramente com Javascript. Faz referência ao bash, entretanto, ainda é incipiente. Em um futuro pode haver interação com PHP para manipulação de arquivos (até o presente momento não existem editores de texto).

![LinuxJs](http://img195.imageshack.us/img195/4743/linuxjs.png)

Trabalha em cima da lib *termlib* de [N. Landsteiner](http://www.masswerk.at/termlib/ "N.Landsteiner"). Dentro do projeto tem o arquivo *termlib.zip* onde o autor original fornece uma documentação e exemplos de uso. Vários tópicos da documentação não funcionam mais, provavelmente o Landsteiner deve ter retirado algumas funcionalidades.

## Estrutura
***termlib.js***:

 - Faz a manipulação de Javascript e CSS em uma div, transformando-a em um terminal.

***init_terminal.js***:
 
 - Inclui novos arquivos js na página;
 - Inicializa o terminal, baseado nos exemplos da documentação.
 - Configura o terminal para não guardar históricos de comandos repetidos sequencialmente, posicionamento XY do terminal no navegador, tamanho em colunas e linhas do terminal. Também ativa o wrapping necessário para inserir múltiplas linhas de texto no terminal.

A partir destes dois arquivos um terminal já é instanciado na página, entretanto não tem funcionalidade alguma. Então foi desenvolvido o seguinte:

***bash.js***:

 - É a classe responsável em interpretar os comandos inseridos no terminal.
 - Ao digitar um comando e pressionar enter, um objeto de bash.js é instanciado para receber o comando e chamar o método referente ao mesmo, que retorna o resultado da execução para o próprio terminal. O ponto de partida e retorno estão nas linhas 52 e 53 da função termHandler() do arquivo *init_terminal.js*.

***man.js***:

 - Classe responsável em fornecer a documentação dos comandos existentes. Referência a *man pages* do Linux. Exemplo:

 ![Man Page](http://img401.imageshack.us/img401/6509/manexemplo.png)

 - ***index.html***: página inicial do projeto com exemplo de utilização da `<div>` com terminal, veja também a folha de estilo *style.css* para formatos do terminal.
