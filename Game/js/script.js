const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump =()=>{
    mario.classList.add('jump')
    mario.src = 'images/kirby-jump.gif'
    
    setTimeout(()=>{
        mario.classList.remove('jump')
        mario.src = 'images/kirby1.gif'
        
    },500)
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosition <= 220 && pipePosition > 5 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '';
        mario.style.width = '0'
        mario.style.marginLeft = '0'

        clearInterval(loop)
    }


},10);

document.addEventListener('keydown', jump);