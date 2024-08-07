const botao1 = document.querySelector ('#primeiro')
const botao2 = document.querySelector ('#segundo')
const botao3 = document.querySelector ('#terceiro')
let divPrincipal = document.querySelector ("#principal")
let divAlternatives = document.querySelector ("#alternatives")
let resultado = document.querySelector ("#result")

botao1.addEventListener('click', function() {
    const corBase = divPrincipal.style.backgroundColor;
    const corLetraBase = divPrincipal.style.color;
    const resultadoBase = resultado.textContent;

    divPrincipal.style.backgroundColor = 'salmon';
    divPrincipal.style.color = 'white';
    resultado.textContent = `Errado`

    setTimeout(function() {
        divPrincipal.style.backgroundColor = corBase;
        divPrincipal.style.color = corLetraBase;
        resultado.textContent = resultadoBase;
    }, 1500);
});

botao2.addEventListener('click', function() {
    const corBase = divPrincipal.style.backgroundColor;
    const corLetraBase = divPrincipal.style.color;
    const resultadoBase = resultado.textContent;

    divPrincipal.style.backgroundColor = 'salmon';
    divPrincipal.style.color = 'white';
    resultado.textContent = `Errado`

    setTimeout(function() {
        divPrincipal.style.backgroundColor = corBase;
        divPrincipal.style.color = corLetraBase;
        resultado.textContent = resultadoBase;
    }, 1500);
});

botao3.addEventListener('click', function() {
    const corBase = divPrincipal.style.backgroundColor;
    const corLetraBase = divPrincipal.style.color;
    const resultadoBase = resultado.textContent;

    divPrincipal.style.backgroundColor = 'lightgreen';
    divPrincipal.style.color = 'white';
    resultado.textContent = `Certo`

    setTimeout(function() {
        divPrincipal.style.backgroundColor = corBase;
        divPrincipal.style.color = corLetraBase;
        resultado.textContent = resultadoBase;
    }, 3000);
});




