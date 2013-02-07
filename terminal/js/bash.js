function Bash(){

	//array com mensagens de erro padrao
	var error = [
				'Comando não encontrado, um programador será executado.',
				'Parâmetros insuficientes ou inexistentes, consulte man '
				];

	this.tryCmd=function(command){
		var commandSpliced = command.split(" ");
		var commandTyped = commandSpliced[0];
		var resultCmd = error[0];

		if(commandSpliced[0].search(/^\s*info\s*$/i) == 0){
			resultCmd = this.info();
			
		}else if(commandSpliced[0].search(/^\s*color\s*$/i) == 0){
			resultCmd = this.color(commandSpliced);
			
		}else if(commandSpliced[0].search(/^\s*man\s*$/i) == 0){
			resultCmd = this.manpage(commandSpliced);
			
		}else if(commandSpliced[0].search(/^\s*date\s*$/i) == 0){
			resultCmd = this.date(commandSpliced);
			
		}else if(commandSpliced[0].search(/^\s*echo\s*$/i) == 0){
			resultCmd = this.echo(commandSpliced);
			
		}else{
			resultCmd = error[0];
		}
		return resultCmd;
	};
	
	this.manpage=function(args){
		var manual = new Man(args[1]);
		var result = manual.getManual();
		return result;
	};
	
	this.info=function(){
		var result= [
					'Comandos Disponíveis (digite man + comando para ajuda de comando)',
					' clear',
					' color',
					' date',
					' echo',
					' exit',
					' halt'
					];
		return result;
	};
	
	this.color=function(args){ 
		
		if(args[1] == null){
			return error[1]+'color';
		
		}else{
		
				//cor de fundo:	
			if(args[1] == '-b'){
				term.conf.bgColor = TermGlobals.getColorString(args[2]);
				}
			
			
			 //cor da letra:
			if(args[1] == '-f'){
				
				//nomes do seletores css pra alterar fonte:
				
				if(args[2] == 1){
					term.conf.fontClass = "termFontBlack";
				}
				if(args[2] == 2){
					term.conf.fontClass = "termFontRed";
					//document.getElementById('termDiv').style.color='#ff0000';
				}
				if(args[2] == 3){
					term.conf.fontClass = "termFontGreen";
				}
				if(args[2] == 4){
					term.conf.fontClass = "termFontYellow";
				}
				if(args[2] == 5){
					term.conf.fontClass = "termFontBlue";
				}
				if(args[2] == 6){
					term.conf.fontClass = "termFontMagenta";
				}
				if(args[2] == 7){
					term.conf.fontClass = "termFontCyan";
				}
				if(args[2] == 8){
					term.conf.fontClass = "termFontWhite";
				}
				if(args[2] == 9){
					term.conf.fontClass = "termFontGrey";
				}
				 
			}
			
			term.rebuild();
			return ' ';
		}
		
	};
	
	this.date=function(args){
		var result;
		var datenow = new Date();
		
		var dayweek = datenow.getDay();
			if(dayweek == 0){
				dayweek = 'Domingo';
			}else if(dayweek == 1){
				dayweek = 'Segunda-feira';
			}else if(dayweek == 2){
				dayweek = 'Terça-feira';
			}else if(dayweek == 3){
				dayweek = 'Quarta-feira';
			}else if(dayweek == 4){
				dayweek = 'Quinta-feira';
			}else if(dayweek == 5){
				dayweek = 'Sexta-feira';
			}else{
				dayweek = 'Sábado';
			}
		
		if(args[1] != null){
		
			if(args[1] == '-d'){
				
				var day = datenow.getDate();
				var month = datenow.getMonth();
				var year = datenow.getFullYear();
				result = day+'/'+month+'/'+year;
				return result;
				
			}else if(args[1] == '-h'){
				var hour = datenow.getHours();
				var minutes = datenow.getMinutes();
				var seconds = datenow.getSeconds();
				result = hour+':'+minutes+':'+seconds;
				return result;
				
			}else if(args[1] == '-w'){
				return dayweek;
				
			}else{
				result = error[1]+'date';
				return result;
			}

		}else{
			
			result = dayweek+" -- "+datenow.toLocaleString();
			return result;
		}
		
		
	};
	
	this.echo=function(args){
	
		var result = null;
		if(args[1] == null){
			return error[1]+'echo';
			
		}else{
		
			if(args[1] == '-C'){
				result = args[2].toUpperCase();
				return result;
				
			}else if(args[1] == '-c'){
				result = args[2].toLowerCase();
				return result;
			
			}else{
				result = args[1];
				return result;
			}
		}
	};
	//help js: http://tutsmais.com.br/blog/javascript-2/metodos-funcoes-javascript-number-array-string-regexp/
	//read txt file: http://stackoverflow.com/questions/8137225/read-txt-file-via-client-javascript
}