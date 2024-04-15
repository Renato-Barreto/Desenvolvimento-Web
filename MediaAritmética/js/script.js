//DOM

const nome = document.querySelector ('#nome')
const nota1 = document.querySelector ('#nota1')
const nota2 = document.querySelector ('#nota2')
const nota3 = document.querySelector ('#nota3')
const botao = document.querySelector ('#calcular')
const resultado = document.querySelector ('#resultado')

//Eventos e Função

botao.addEventListener('click',()=>{
    um = Number(nota1.value)
    dois = Number(nota2.value)
    tres = Number(nota3.value)

    media = (um+dois+tres)/3

    situacao = media >= 5 ? "aprovado" : "na recuperação"

    resultado.textContent = `Olá ${nome.value}, Sua média é ${media.toFixed(1)}, você está ${situacao}!`
})