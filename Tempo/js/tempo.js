//DOM
const pesquisa = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const nome_cidade = document.querySelector('.cidade')
const temp = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const key = '5de3b209a3e569a2410d73f220e18fbd'


botao.addEventListener('click',buscarcidade)

// async - função que aguarda a informação pra executar, ideal para consumo de API
async function buscarcidade(){

    const cidade = pesquisa.value
    // await - o fetch irá aguardar para trazer a resposta
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    console.log(dados)

    nome_cidade.textContent = `Tempo em ${dados.name}`
    temp.textContent = `${(dados.main.temp).toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`
}