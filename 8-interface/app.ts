function imprimirNome(obj: {nome:string}) {
    console.log(obj.nome);
}

let pessoa = {nome: 'Jonatas', idade: 30}//a interface aceita novos valores
imprimirNome(pessoa);

let pessoa2 = {nome: 'lais', idade: 26};
function imprimirNome2(nome) {
    console.log(nome);
}

//imprimirNome2('Lais', 27) //ja o metodo nao aceita

imprimirNome2(pessoa2);//dese geito tudo que esta dentro de pessoa2 fica entre "" e vira como se fosse o nome


//acesando todod os valores da interface, nao importando q quantidade
function imprimirNome3(obj: { nome: string }) {

    let valores = Object.keys(obj);

    for (let i = 0; i < valores.length; i++) {

        console.log(valores[i] + ": " + obj[valores[i]]);

    }
}

let pessoa3 = { nome: 'Ricardo', idade: 30, sexo: true }

imprimirNome3(pessoa3);