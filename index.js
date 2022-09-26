/* 
* Nome: Maria Luciana Almeida Pereira
* Matrícula: 20211103020010 
*/

const inquirer = require('inquirer')
const chalk = require('chalk')

const prompt = inquirer.createPromptModule()

prompt([
	{
		type: 'input',
		name: 'nome',
		message: 'Qual seu nome?',
		default: 'Anônimo'
	},
	{
		type: 'number',
		name: 'idade',
		message: 'Qual a sua idade?'
	},
	{
		type: 'list',
		name: 'sexo',
		message: 'Qual seu sexo?',
		choices: [ 'Feminino', 'Masculino', 'Prefiro não dizer']
	},
	{
		type: 'input',
		name: 'telefone',
		message: 'Qual seu telefone?'
	},
	{
		type: 'input',
		name: 'cidade',
		message: 'Qual sua cidade?',
		default: 'Canindé'
	},
	{
		type: 'list',
		name: 'cor',
		message: 'Qual sua cor favorita?',
		choices: [ 'Vermelho', 'Azul', 'Amarelo', 'Preto', 'Branco', 'Verde']
	},
]).then((respostas) => {
	if(respostas.nome == 'Anônimo'){
		console.log(`Nome: ${chalk.red(respostas.nome)}`)
	} else {
		console.log(`Nome: ${chalk.green(respostas.nome)}`)
	}
	
	if(respostas.idade > 0 && respostas.idade <= 150){
		console.log(`Idade: ${chalk.green(respostas.idade)}`)
	} else {
		console.log(`Idade: ${chalk.red('inválida!')}`)
	}
	
	console.log(`Sexo: ${chalk.green(respostas.sexo)}`)
	console.log(`Telefone: ${chalk.green(respostas.telefone)}`)
	console.log(`Cidade: ${chalk.green(respostas.cidade)}`)

	if(respostas.cor == 'Vermelho'){
		console.log(`Cor favorita: ${chalk.red(respostas.cor)}`)
	} else if (respostas.cor == 'Azul'){
		console.log(`Cor favorita: ${chalk.blue(respostas.cor)}`)
	} else if (respostas.cor == 'Amarelo'){
		console.log(`Cor favorita: ${chalk.yellow(respostas.cor)}`)
	} else if (respostas.cor == 'Preto'){
		console.log(`Cor favorita: ${chalk.blackBright(respostas.cor)}`)
	} else if (respostas.cor == 'Branco'){
		console.log(`Cor favorita: ${chalk.white(respostas.cor)}`)
	} else if (respostas.cor == 'Verde'){
		console.log(`Cor favorita: ${chalk.green(respostas.cor)}`)
	}
}).catch((error) => {
    if (error.isTtyError) {
		console.log(chalk.red('Não é possível renderizar o prompt de comando!'))
    } else {
		console.log(chalk.red(error))
    }
})