// DOM - Determina quem dos objetos do HTML vão participar do JS
//const - Constante, não muda.
//Let = variável, muda.

const galeria = document.querySelector('#fotos')
const SS = document.querySelector('#SS')
const OoT = document.querySelector('#OoT')
const ALttP = document.querySelector('#ALttP')
const LA = document.querySelector('#LA')
const TP = document.querySelector('#TP')
const BotW = document.querySelector('#BotW')
const TotK = document.querySelector('#TotK')
const Return = document.querySelector('#Return')

//Eventos

SS.addEventListener('click', SSimage)
OoT.addEventListener('click', OoTimage)
ALttP.addEventListener('click', ALttPimage)
LA.addEventListener('click', LAimage)
TP.addEventListener('click', TPimage)
BotW.addEventListener('click', BotWimage)
TotK.addEventListener('click', TotKimage)
Return.addEventListener('click', Returnimage)

//Funções

function SSimage(){
    galeria.src = 'images/SS_Link.webp'
}

function OoTimage(){
    galeria.src = 'images/Oot_Link.webp'
}

function ALttPimage(){
    galeria.src = 'images/ALttP_Link.webp'
}

function LAimage(){
    galeria.src = 'images/LA_Link.png'
}

function TPimage(){
    galeria.src = 'images/TP_Link.webp'
}

function BotWimage(){
    galeria.src = 'images/BotW_Link.webp'
}

function TotKimage(){
    galeria.src = 'images/TotK_Link.webp'
}

function Returnimage(){
    galeria.src = 'images/Silhueta_Link.jpg'
}