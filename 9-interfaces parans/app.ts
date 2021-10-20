interface config {
    nome?:string;//o ? serve para indicar que nao é obrigratorio
    idade?:number;
}
function criarPessoa(config: config): { nome: string; idade: number}{
    let pessoa = {nome:"nome não informado", idade:0}
    if(config.nome){
        pessoa.nome = config.nome;
    }
    if(config.idade){
        pessoa.idade = config.idade;
    }
    return pessoa;
   
}
let aluno = criarPessoa({nome:"João"})
console.log(aluno);