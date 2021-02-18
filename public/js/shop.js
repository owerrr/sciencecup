function registerShop(){
    document.getElementsByName("off").forEach(option => {
        option.onclick = function(){
            document.querySelector('.store').classList.toggle('active')
            document.body.classList.toggle('shop-active')
            if(document.querySelector(".store").classList.contains("active")){
                changeImage(null)
            }
            showOption('Colors')
        }
    })

    document.getElementsByName("shop-color").forEach(option => {
        option.onclick = function(){
            let value = Array.from(document.getElementsByClassName("option-color")).find(r => r.checked).id.replace("shop", "")
            changeImage(value)
        }
    })
    document.getElementsByName("shop-hat").forEach(option => {
        // TODO, CZAPKI
        
    })
}
function showOption(val) {
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
function changeImage(value){
    if(value == null){
        document.getElementById("shop-image").src = gameImages.player.src;
        return;
    }
    gameImages.player.src = `public/img/player-static${value}.png`
    document.getElementById("shop-image").src = `public/img/player-static${value}.png`
    game.player.image.src = `public/img/player-static${value}.png`
}