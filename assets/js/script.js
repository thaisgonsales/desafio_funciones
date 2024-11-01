const elemento = document.getElementById("ele1")

pintarElemento(elemento, "green")

function pintarElemento(elemento, color = "green"){
    elemento.style.background = color
}


elemento.addEventListener("click", function(){
    pintarElemento(elemento, "yellow")
})

