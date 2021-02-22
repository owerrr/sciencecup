window.onload = () => {

    runGame(1)
    //Level selector 
    document.querySelectorAll("li.level").forEach(e => {
        e.onclick = () => {
            document.querySelector(".level-select").classList.toggle("level-select");
            e.classList.toggle("level-select")
            game.clearGame()
            runGame(e.innerHTML)
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
    document.querySelector('.next-level').onclick = () => {
        game.clearGame()
        if(parseInt(document.querySelector('.game-box').id) == levels.length+1){
            document.querySelector('.game-box').id = '0'
        }
        document.querySelector(".level-select").classList.toggle("level-select");
        document.querySelectorAll(".level")[parseInt(document.querySelector('.game-box').id)].classList.toggle("level-select");
        runGame(parseInt(document.querySelector('.game-box').id)+1)
        document.querySelector('.won').style.display = 'none'
        document.getElementById('moves').innerHTML=''
    }
    
    document.querySelector('#diff').onclick = ()=>{
        document.querySelector('.difficult').classList.toggle('chosen')
    }
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
