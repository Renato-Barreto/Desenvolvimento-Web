//DOM

const peso = document.querySelector('#weight')
const altura = document.querySelector('#height')
const botao = document.querySelector('#calculate')
const resultado = document.querySelector('#result')

//EVENTOS

botao.addEventListener('click',()=>{

    event.preventDefault()

    p = peso.value
    a = altura.value
    imc = p/(a**2) 
  
    resultado.textContent = `O seu IMC é ${imc.toFixed(2)}`
})
