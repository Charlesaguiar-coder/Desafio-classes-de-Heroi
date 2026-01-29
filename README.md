# Desafio de Projeto - Classe Heroi

## Descrição
Criar uma classe que represente um herói de um jogo, contendo nome, idade e tipo, e um método responsável por realizar o ataque conforme o tipo do herói.

## Requisitos
- A classe deve se chamar `Heroi`
- Deve possuir as propriedades:
  - nome
  - idade
  - tipo
- Deve possuir o método `atacar()`

## Tipos e Ataques
- guerreiro → espada  
- mago → magia  
- monge → artes marciais  
- ninja → shuriken  

## Exemplo de Uso
```javascript
const heroi = new Heroi("Arus", 30, "mago");
console.log(heroi.atacar());