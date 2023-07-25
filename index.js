let numeroEstiloBackground = Math.floor(Math.random()*5)
let numeroEstiloTitulo = Math.floor(Math.random()*5)
let numeroEstiloBoton = Math.floor(Math.random()*5)
button.addEventListener("submit", ()=>{
    changeBackround})
    
    let colores = ["colorCero", "colorUno", "colorDos", "colorTres", "colorCuatro"]
    let colorTitulo =["tCero", "tUno", "tDos", "tTres", "tCuatro"]
function changeBackround(){
    let cambiarFondoTitulo = document.getElementById("titulo")
    cambiarFondoTitulo.classList.remove("defaultTitle")
    cambiarFondoTitulo.classList.add(colorTitulo[numeroEstiloTitulo])

    let cambiarFondoBackround = document.getElementById("body")
    cambiarFondoBackround.classList.remove("defaultBody")
    cambiarFondoBackround.classList.add(colores[numeroEstiloBackground])

    let cambiarFondoBoton = document.getElementById("button")
    cambiarFondoBoton.classList.remove("defaultButton")
    cambiarFondoBoton.classList.add(colores[numeroEstiloBoton])

}










// hacer el random:listo
// hacer la lista de categorías
// hacer el event listener

