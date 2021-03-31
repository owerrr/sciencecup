function viewlevels(){
    document.querySelector("#level_list").style.zIndex = 999;
    document.querySelector("#level_list").style.opacity = 1;
}
function closelevels(){
    document.querySelector("#level_list").style.zIndex = -3122;
    document.querySelector("#level_list").style.opacity = 0;
}

function viewranking(){
    document.querySelector("#ranking").style.zIndex = 999;
    document.querySelector("#ranking").style.opacity = 1;
}
function closeranking(){
    document.querySelector("#ranking").style.zIndex = -3122;
    document.querySelector("#ranking").style.opacity = 0;   
}