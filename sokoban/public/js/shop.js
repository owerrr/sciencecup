function registerShop(){
    document.getElementsByName("off").forEach(option => {
        option.onclick = function(){
            document.querySelector('.store').classList.toggle('active')
            document.body.classList.toggle('shop-active')
            if(document.querySelector(".store").classList.contains("active")){
                changeImage(null)
            }
            showOption()
        }
    })

    document.getElementsByName("shop-color").forEach(option => {
        option.onclick = function(){
            let value = Array.from(document.getElementsByClassName("option-color")).find(r => r.checked).id.replace("shop", "")
            changeImage(value)
        }
    })
}
function showOption(val) {
    game.canMove = document.querySelector('.colors').classList.contains('active');
    document.querySelector('.module').classList.remove('shown')
    document.querySelector('.difficult').classList.add('chosen')
}
function changeImage(value){
    if(value == null){
        document.getElementById("shop-image").src = gameImages.player.src;
        return;
    }
    gameImages.player.src = `public/img/player-static${value}.png`
    document.getElementById("shop-image").src = `public/img/player-static${value}.png`
    game.player.image.src = `public/img/player-static${value}.png`
}