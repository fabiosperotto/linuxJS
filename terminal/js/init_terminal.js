var term;
document.write('<script type="text/javascript" src="js/man.js"></script>');
function termOpen() {
	

	if ((!term) || (term.closed)) {
		term = new Terminal(
			{
				x: 100,
				y: 130,
				cols: 70,
				rows:35,
				termDiv: 'termDiv',
				bgColor: '#000000',
				greeting: '%+r **** Linux JS **** %-r%n%n * Simulador de terminal baseado no /bin/bash feito em javascript%n '+
							'* Utiliza lib de http://www.masswerk.at/termlib%n * Criador fabio a. sperotto - fabio.aiub@gmail.com%n '+
							'* Digite "halt" ou "exit" ou tecle ESC, para sair%n '+
							'* Digite "info" para comandos disponíveis%n%n * Loading ...................... OK%n '+
							'* Variáveis de ambiente ........ OFF%n * Concatenação de comandos ..... OFF%n '+
							'* Editores de texto ............ OFF%n',
				handler: termHandler,				
				exitHandler: termExitHandler,
				wrapping: true, //ativa o wrapping pra podermos escrever multiplas linhas no terminal
				historyUnique: true,
				crsrBlinkMode: true
			}
		);
		term.open();
		// dimm UI text
		var mainPane = (document.getElementById)?
			document.getElementById('mainPane') : document.all.mainPane;
		if (mainPane) mainPane.className = 'lh15 dimmed';

		
	}
}

function termHandler() {
	// default handler + exit
	
	this.newLine();
	
	if (this.lineBuffer.search(/^\s*halt\s*$/i) == 0) {
		this.close();
		return;
	}else if(this.lineBuffer.search(/^\s*exit\s*$/i) == 0) {
		this.close();
		return;
	}else if(this.lineBuffer.search(/^\s*clear\s*$/i) == 0){
		this.clear();
	}else if (this.lineBuffer != '') {
		var cmdController = new Bash();
		var result = cmdController.tryCmd(this.lineBuffer);
		this.write(result);
		this.newLine();
	}
	this.prompt();
}

function termExitHandler() {
	// reset the UI
	var mainPane = (document.getElementById)?
		document.getElementById('mainPane') : document.all.mainPane;
	if (mainPane) mainPane.className = 'lh15';
}



