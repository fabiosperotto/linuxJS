function Man(command){
	
	var commandTyped = command;
	
	this.getManual=function(){
		
		if(commandTyped == 'color'){
			return this.mancolor();
		}
		if(commandTyped == 'clear'){
			return this.manclear();
		}
		if(commandTyped == 'date'){
			return this.mandate();
		}
		if(commandTyped == 'echo'){
			return this.manecho();
		}
		if(commandTyped == 'exit'){
			return this.manexit();
		}
		if(commandTyped == 'halt'){
			return this.manhalt();
		}
	};
	

	this.mancolor=function(){
		var result = [
					'Man Pages | color',
					'Comando para estilizar o terminal.',
					' ',
					'-- Formato --',
					'color [par�metro] [valor]',
					' ',
					'-- Par�metros --',
					'-b: alterar fundo da tela',
					'-f: alterar cor da fonte',
					' ',
					'-- Lista de valores poss�veis --',
					'1 - preto',
					'2 - vermelho',
					'3 - verde',
					'4 - amarelo',
					'5 - azul',
					'6 - magenta',
					'7 - ciano',
					'8 - branco',
					'9 - cinza'
					];
		return result;
	};
	
	this.manclear=function(){
		var result = [
					'Man Pages | clear',
					'Comando para limpar tela do terminal.',
					' ',
					'-- Formato --',
					'clear <sem par�metros>',
					' '
					];
		return result;
	};
	
	this.mandate=function(){
		var result = [
					'Man Pages | date',
					'Comando para visualizar data, par�metros s�o opcionais.',
					' ',
					'-- Formato --',
					'date [par�metro opcional]',
					' ',
					'-- Par�metros --',
					'-d: mostra somente a data no formato DD/MM/AAAA',
					'-h: mostra a hora atual',
					'-w: mostra o dia da semana corrente', 
					];
		return result;
	};
	
	this.manecho=function(){
		var result = [
					'Man Pages | echo',
					'Mostra uma linha de texto.',
					' ',
					'-- Formato --',
					'echo [par�metro opcional] [string]',
					' ',
					'-- Par�metros --',
					'-c: transforma todas as letras de [string] em min�sculas',
					'-C: transforma todas as letras de [string] em mai�sculas'
					];
		return result;
	};
	
	this.manexit=function(){
		var result = [
					'Man Pages | exit',
					'Finaliza terminal.',
					' ',
					'-- Formato --',
					'exit <sem par�metros>',
					' '
					];
		return result;
	};
	
	this.manhalt=function(){
		var result = [
					'Man Pages | halt',
					'Finaliza terminal.',
					' ',
					'-- Formato --',
					'halt <sem par�metros>',
					' '
					];
		return result;
	};
	
	
}