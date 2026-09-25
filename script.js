//Comprobar si el archivo está conectado al html
console.log('Sí esta conectado nuestro archivo');


// Paso 1. definir el cuadro de texto donde las personas van a poder escribir
const campoTexto = document.getElementById('texto-prueba');

//Paso 2. leer el cuadro de texto
campoTexto.addEventListener('input', function(){
   campoTexto.textContent = campoTexto.value;
});


// Paso 3. variar el peso del texto dentro de este cuadro
const controlPeso = document.getElementById('variante-peso');
const valorPeso = document.getElementById('valor-peso');

controlPeso.addEventListener('input', function() {
   campoTexto.style.setProperty('--wght', controlPeso.value);
});


// Paso 4. Indicarle la opcion de italica (use claude para saber como hacer el cambio en estilo al ser un Checkbox y no un boton)
const boton = document.getElementById('boton-italica');

boton.addEventListener('change', function (evento) {
    campoTexto.style.fontStyle = boton.checked ? 'italic' : 'normal';
    //boton.checked = campoTexto.style.setProperty('font-style', 'italic');
});
