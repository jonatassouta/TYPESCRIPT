function criarPessoa(config) {
    var pessoa = { nome: "nome não informado", idade: 0 };
    if (config.nome) {
        pessoa.nome = config.nome;
    }
    if (config.idade) {
        pessoa.idade = config.idade;
    }
    return pessoa;
}
var aluno = criarPessoa({ nome: "João" });
console.log(aluno);
