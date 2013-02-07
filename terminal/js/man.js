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
					'color [parâmetro] [valor]',
					' ',
					'-- Parâmetros --',
					'-b: alterar fundo da tela',
					'-f: alterar cor da fonte',
					' ',
					'-- Lista de valores possíveis --',
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
					'clear <sem parâmetros>',
					' '
					];
		return result;
	};
	
	this.mandate=function(){
		var result = [
					'Man Pages | date',
					'Comando para visualizar data, parâmetros são opcionais.',
					' ',
					'-- Formato --',
					'date [parâmetro opcional]',
					' ',
					'-- Parâmetros --',
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
					'echo [parâmetro opcional] [string]',
					' ',
					'-- Parâmetros --',
					'-c: transforma todas as letras de [string] em minúsculas',
					'-C: transforma todas as letras de [string] em maiúsculas'
					];
		return result;
	};
	
	this.manexit=function(){
		var result = [
					'Man Pages | exit',
					'Finaliza terminal.',
					' ',
					'-- Formato --',
					'exit <sem parâmetros>',
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
					'halt <sem parâmetros>',
					' '
					];
		return result;
	};
	
	
}