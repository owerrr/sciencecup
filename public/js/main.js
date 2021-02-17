window.onload = () => {
    runGame(1)
    document.querySelectorAll("li.level").forEach(e => {
        e.onclick = () => {
            document.querySelector(".level-select").classList.remove("level-select");

            e.classList.add("level-select")
            clearGame()
            runGame(e.innerHTML)
        }
    })
    document.getElementById('shop').onclick = ()=>{
        document.querySelector('.store').classList.toggle('active')
        document.body.classList.toggle('shop-active')
    }
    var anchors = document.getElementsByClassName("option");
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick= function() {
            let val = Array.from(document.getElementsByClassName("option")).find(r => r.checked).name;
            gameImages.player.src = `public/img/player-static-${val}.png`
            gameImages.playermove.src = `public/img/player-moving-${val}.png`
        }
    }
    
}
let showOption = (val)=>{
switch(val){
    case 'Colors':
        document.querySelector('.colors').classList.toggle('active')
        if(document.querySelector('.hats').classList.contains('active')){
            document.querySelector('.hats').classList.toggle('active')
         }
        break;
    case 'Hats':
        document.querySelector('.hats').classList.toggle('active')
        if(document.querySelector('.colors').classList.contains('active')){
            document.querySelector('.colors').classList.toggle('active')
        }
        break;
}
}