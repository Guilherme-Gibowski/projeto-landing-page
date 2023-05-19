var SetaEsquerda = window.document.getElementById("seta-esquerda")
var SetaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")

function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    SetaEsquerda.style = "display:flex"
    SetaDireita.style = "display:none"
}

function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex"
}