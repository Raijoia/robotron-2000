/*
Anotações da Aula
const robotron = document.querySelector("#robotron")

// fazendo o onclick direto no arquivo js
robotron.addEventListener("click", dizOi)

// msm coisa, porém com uma função anonima
// robotron.addEventListener("click", function() {
//   console.log("cliquei no robo")
// })

// forma diferente de fazer uma função anonima
robotron.addEventListener("click", () => {
    console.log("cliquei no robo")
})

// Vendo um evento, apenas conseguindo fazer isso usando uma função anonima, nessa função, irá retornar o point(mouse clicado)
robotron.addEventListener("click", (e) => {
    console.log(e)
})

// fazendo em uma função, pois, se colocar direto, o console.log vai rodar quando a página for carregada e não quando o robo for clicado
function dizOi(nome) {
  console.log(nome)
  console.log('Bem-vindo ao Robotron 2000')
}

// chamando dentro de uma função para apenas realizar a função quando for realmente clicado e não quando o site carregar
somar.addEventListener("click", () => {
    manipulaDados("somar")
})

// chamando dentro de uma função para apenas realizar a função quando for realmente clicado e não quando o site carregar
subtrair.addEventListener("click", () => {
  manipulaDados("subtrair")
})

// manipulaDados(evento.target.textContent) pega oque contem dentro da array
manipulaDados(evento.target.textContent, evento.target.parentNode)

dizOi('Raí');


OBS: O data attributes não precisa necessariamente ter um valor, podemos apenas declarar ele para identificarmos algo, O prefixo data- não é obrigatório para definir um data-attribute

Exemplo:<li cor="laranja" tipo="tinta-exterior" onclick="mudaCores(this)" class="item">Tinta laranja</li>

cor é um data attributes

*/

const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')
console.log(estatisticas)
const pecas = {
  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5,
  },

  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20,
  },
  "nucleos": {
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -24,
  },
  "pernas": {
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 42,
  },
  "foguetes": {
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2,
  },
}

// forEach, uma função para a array, elemento me traz o indice de cada elemento dentro da array
controle.forEach( (elemento) => {
  // evento pega o elemento do indice clicado
  elemento.addEventListener("click", (evento) => {
    // evento.target.dataset.controle pega o valor do data-controle
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    // evento.target.dataset.peca pega o valor do data-peca
    atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)

    // evento.target.parentNode pega o elemento pai do elemento clicado, conseguindo saber para qual elemento o ponto vai e oq ele tem que fazer
    // console.log(evento.target.parentNode)
  })
})

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]")

  if (operacao === "-") {
    // pegando o valor do braço e subtraindo o valor do peca por menos um, porem, usamos o parseInt(peca.value) para pegar como type=number, se não, ele vem como type=string
    peca.value = parseInt(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}

function atualizaEstatisticas(peca, operacao) {
  if (operacao === "+") {
    // navegando pelo object, usando o parametro para passar o nome
    estatisticas.forEach( (elemento) => {
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
  } else {
    estatisticas.forEach( (elemento) => {
      elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
    })
  }
}
