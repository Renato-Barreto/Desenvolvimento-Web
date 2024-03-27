//DOM

const claro = document.querySelector('#sol')
const escuro = document.querySelector('#lua')
const fundo = document.querySelector('body')

//Eventos

claro.addEventListener('click',light)
escuro.addEventListener('click',dark)

//Função

function light(){
    fundo.className='claro'
}

function dark(){
    fundo.className='escuro'
}