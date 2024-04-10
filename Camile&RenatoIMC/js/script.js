//DOM
const Peso = document.querySelector ('#Peso')
const Altura = document.querySelector ('#Altura')
const Botao = document.querySelector ('#Calcular')
const Resultado = document.querySelector ('#Resultado')

//Eventos e Funções

Botao.addEventListener('click', ()=>{

    p = Number(Peso.value)
    a = Number(Altura.value)

    r = p/(a*a)

    if(r < 18.5){
        Resultado.textContent = `Seu IMC é de ${r.toFixed(1)}, Magreza.`
    } else if(r >= 18.5 && r < 25){
        Resultado.textContent = `Seu IMC é de ${r.toFixed(1)}, Peso Normal.`
    } else if(r >=25 && r < 30){
        Resultado.textContent = `Seu IMC é de ${r.toFixed(1)}, Acima do Peso.`
    } else if(r >= 30){
        Resultado.textContent = `Seu IMC é de ${r.toFixed(1)}, Obesidade.`
    } else {
        Resultado.textContent = `Aguardando informações`
    }

})