function calcular () {
var precoGasolina = document.querySelector('#gasolina')
var precoAlcool = document.querySelector('#alcool')

var precoGasolina = Number.parseFloat(precoGasolina)
var precoAlcool = Number.parseFloat(precoAlcool)

var alcool

if (precoAlcool.value <= 0.7 * precoGasolina)
    var alcool = 0
else 
    var alcool = 1

var img = document.getElementById("resultado")

if (alcool == 0)
    img.src = "img/alcool.png"
else
    img.src = "img/gasolina.png"
}

