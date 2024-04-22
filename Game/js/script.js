const kirby = document.querySelector('.kirby');
const waddledee = document.querySelector('.waddle-dee');
const pontos = document.querySelector('#pontosNumero')

const jump =()=>{
    kirby.classList.add('jump')
    kirby.src = 'images/kirby-jump.gif'
    
    setTimeout(()=>{
        kirby.classList.remove('jump')
        if(kirby.style.bottom == 0){
            kirby.src = 'images/kirby1.gif'
        }
        
    },500)
}

const loop = setInterval(()=>{

    const waddlePosition = waddledee.offsetLeft;
    const kirbyPosition = +window.getComputedStyle(kirby).bottom.replace('px','');

    console.log(kirbyPosition);

    if(waddlePosition <= 160 && waddlePosition > 5 && kirbyPosition < 80){
        waddledee.style.animation = 'none';
        waddledee.style.left = `${waddlePosition}px`;
        
        kirby.style.animation = 'none';
        kirby.style.bottom = `${kirbyPosition}px`;

        kirby.src = 'images/game-over2.gif';
        kirby.style.width = '140px'
        kirby.style.marginLeft = '-30px'

        clearInterval(loop)
    }

    if(waddlePosition < 5 && kirbyPosition == 0){
        pontos++;
    }

    
},10);



document.addEventListener('keydown', jump);