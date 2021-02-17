window.onload = () => {
    runGame(1)
    document.querySelectorAll("li.level").forEach(e => {
        e.onclick = () => {
            document.querySelector(".level-select").classList.toggle("level-select");
            e.classList.toggle("level-select")
            clearGame()
            runGame(e.innerHTML)
        }
    })
    registerShop()
}