
const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener( 'click', () => {
    nomeSaida.textContent = nomeEntrada.value;

} );

btnTroca.addEventListener( 'mouseenter', () => {
    nomeSaida.style.color = "#B81500"})

btnTroca.addEventListener( 'mouseout', () => {
    nomeSaida.style.color = "#000000ff"})

// trocando a cor da caixa

const btnAzul = document.getElementById("btn_azul");
const btnVerde = document.getElementById("btn_verde");
const btnAmarelo = document.getElementById("btn_amarelo");
const caixa = document.getElementById('caixa')

btnAzul.addEventListener('click', function(){
    caixa.style.backgroundColor = "blue"
})

btnVerde.addEventListener('click', function(){
    caixa.style.backgroundColor = "green"

})

btnAmarelo.addEventListener('click', function(){
    caixa.style.backgroundColor = "yellow"

})