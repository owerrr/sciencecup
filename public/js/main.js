window.onload = () => {
    runGame(1)
    document.querySelectorAll("li").forEach(e => {
        e.onclick = () => {
            document.querySelector(".level-select").classList.remove("level-select");

            e.classList.add("level-select")
            clearGame()
            runGame(e.innerHTML)
        }
    })
}