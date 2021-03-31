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
            e.parentElement.classList.remove('shown')
        }
    })
    document.querySelectorAll('.retry').forEach(e=>{
        e.onclick = () => {
            changeLevel(game.level)
            e.parentElement.classList.remove('shown')
        }
    })
    //menu dificulty selector
    document.querySelector('#diff').onclick = () =>{
        document.querySelector('.difficult').classList.toggle('chosen')
        document.querySelector('.module').classList.remove('shown')
        document.querySelector('.store').classList.remove('active')
        game.canMove = false;
    }
    document.querySelector('#module').onclick = () =>{
        document.querySelector('.module').classList.toggle('shown')
        document.querySelector('.difficult').classList.add('chosen')
        document.querySelector('.store').classList.remove('active')
    }
    document.querySelectorAll(".ncinput").forEach( e => {
            e.onclick = () => {
                changeDifficult(e.id)
        }
    })
    document.querySelectorAll(".ncinput2").forEach( e => {
        e.onclick = () => {
            if(e.classList.contains("module3")){
                window.open("creator.html", '_blank');
            }
            if(e.classList.contains("module2")){
                document.getElementsByClassName("game-header_utilities-bar")[0].innerHTML = "";
                let sort = [1 ,3 ,4 ,5, 2, 7, 6, 8];
                sort.forEach(e => {
                    let child = document.createElement("li");
                    child.classList.add("level");
                    child.innerHTML = e;
                    if(e == game.level+1){
                        child.classList.add("level-select")
                    }
                    document.getElementsByClassName("game-header_utilities-bar")[0].append(child);
                    child.onclick = () => {
                        changeLevel(e - 1)
                    }
                });
            }
            if(e.classList.contains("module1")){
                document.getElementsByClassName("game-header_utilities-bar")[0].innerHTML = "";
                let sort = [1 , 2, 3, 4, 5, 6, 7, 8];
                sort.forEach(e => {
                    let child = document.createElement("li");
                    child.classList.add("level");
                    child.innerHTML = e;
                    if(e == game.level+1){
                        child.classList.add("level-select")
                    }
                    document.getElementsByClassName("game-header_utilities-bar")[0].append(child);
                    child.onclick = () => {
                        changeLevel(e - 1)
                    }
                });
            }
        }
    })
}
//Utilities
function changeLevel(level){
    if(document.querySelector('.difficult') !=null){
        document.querySelector('.difficult').classList.remove('chosen')
    }
    runGame(level+1);
    document.querySelector('#won').classList.remove('shown')
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