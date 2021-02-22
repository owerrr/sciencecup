window.onload = () => {

    runGame(1)
    //Level selector 
    
    document.querySelectorAll("li.level").forEach(e => {
        e.onclick = () => {
            document.querySelector(".level-select").classList.toggle("level-select"); //off
            e.classList.toggle("level-select") //on
            runGame(e.innerHTML)
            $('.won').css( "display", "none")
            $('.won').css( "height", "50px")
            $('.won').css( "width", "0")
            document.getElementById('moves').innerHTML= '0'
            document.querySelector('.game-box').id = game.level + 1;
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
        //create changelevel function
    }
    
    document.querySelector('#diff').onclick = () =>{
        document.querySelector('.difficult').classList.toggle('chosen')
    }
}
//Utilities

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
