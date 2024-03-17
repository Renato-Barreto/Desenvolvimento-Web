// DOM - Determina quem dos objetos do HTML vão participar do JS
//const - Constante, não muda.
//Let = variável, muda.

const lampada = document.querySelector('#lampada') // '#' - Antes de ID / '.' - Antes de DIV
const bt01 = document.querySelector('#btligar')
const bt02 = document.querySelector('#btdesligar')

//Eventos - É o passo a passo de uma ação

bt01.addEventListener('click', ligar)
bt02.addEventListener('click', desligar)
lampada.addEventListener('dblclick', quebrar) // espaço após a virgula recebe o nome da função

//Funções - Função da ação

function ligar(){
    lampada.src = 'images/acesa.gif'
}

function desligar(){
    lampada.src = 'images/apagada.gif'
}

function quebrar(){
    lampada.src = 'images/quebrada.jpg'
}