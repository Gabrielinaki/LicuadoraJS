let estadoLicuadora = "apagado";
let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora = document.getElementById("blender-Button-sound");
let licuadora = document.getElementById("blender");

const controlarLicuadora = () => {
    if (estadoLicuadora === "apagado") {
        estadoLicuadora = "encendido"; 
        hacerRuido();
        licuadora.classList.add("active");
        
    } else {
        estadoLicuadora ="apagado"
        hacerRuido();
        licuadora.classList.remove("active");
    
    }
}

const hacerRuido = () => {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}