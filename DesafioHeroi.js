class Heroi {

  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    if (this.tipo == "guerreiro") {
      return `${this.tipo} atacou usando espada`
    }
    else if (this.tipo == "mago") {
      return `${this.tipo} atacou usando magia`
    }
    else if (this.tipo == "monge") {
      return `${this.tipo} atacou usando artes marciais`
    }
    else if (this.tipo == "ninja") {
      return `${this.tipo} atacou usando shuriken`
    }
    else {
      return `Personagem invalido`
    }
  }

}


const c = new Heroi("Charles", 32, "pedro")
let acao = c.atacar()
console.log(acao)

