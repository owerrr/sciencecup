window.onload = () => {
    runGame(1)
    document.querySelectorAll("li.level").forEach(e => {
        e.onclick = () => {
            document.querySelector(".level-select").classList.toggle("level-select");
            e.classList.toggle("level-select")
            game.clearGame()
            runGame(e.innerHTML)
        }
    })
    registerShop()
}
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