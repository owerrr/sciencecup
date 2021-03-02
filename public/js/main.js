window.onload = () => {
    runGame(1)
    document.querySelectorAll("li.level").forEach(e => {
        e.onclick = () => {
            changeLevel(parseInt(e.innerHTML) - 1)
        }
    })
    registerShop()
    //Loader screen
    setTimeout(() => {
        document.querySelector('.loading-screen').classList.add('off')
        document.querySelector('.loading-screen')
        document.body.style.overflowY = 'visible'
    }, 1000)
    //Win game screen
    document.querySelectorAll('.next-level').forEach(e=>{
        e.onclick = () => {
            changeLevel(game.level + 1)
            e.parentElement.classList.remove('winlose-on')
        }
    })
    document.querySelectorAll('.retry').forEach(e=>{
        e.onclick = () => {
            changeLevel(game.level)
            e.parentElement.classList.remove('winlose-on')
        }
    })
    //menu dificulty selector
    document.querySelector('#diff').onclick = () =>{
        document.querySelector('.difficult').classList.toggle('chosen')
        game.canMove = false;
    }
    document.querySelectorAll(".ncinput").forEach( e => {
            e.onclick = () => {
                changeDifficult(e.id)
        }
    })
}
//Utilities
function changeLevel(level){
    if(document.querySelector('.difficult') !=null){
        document.querySelector('.difficult').classList.remove('chosen')
    }
    runGame(level+1);
    document.querySelector('#won').classList.remove('winlose-on')
    document.getElementById('moves').innerHTML= '0'
    document.querySelector('.game-box').id = level+1;
}
//get time string
function getTime(){
    let s = game.stoper
    let min = Math.floor(s/60)
    s = s % 60
    let ret = ""
    if(min != 0){
        ret = `${min}m `
    }
    ret = `${s}s`
    return ret;
}
function changeDifficult(val){
    game.canMove = true;
    document.querySelector('.difficult').classList.add('chosen')
    game.changeDifficult(val)
}