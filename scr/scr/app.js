//Szeri Bendegúz
//2023.03.24
//I/2/N

var AoldalInput = document.querySelector('#Aoldal');
var BoldalInput = document.querySelector('#Boldal');
var ColdalInput = document.querySelector('#Coldal');
var calcButton = document.querySelector('#calcButton');
var terfogatInput = document.querySelector('#terfogat');

calcButton.addEventListener('click', () => {
    inputCon();
});

function inputCon() {
    let Aoldal = Number(AoldalInput.value);
    let Boldal = Number(BoldalInput.value);
    let Coldal = Number(ColdalInput.value);


    let terfogat= calcterfogat(Aoldal, Boldal, Coldal);
    terfogatInput.value= " " + terfogat;
}

    function calcterfogat(Aoldal, Boldal, Coldal) {
        return Aoldal*Boldal*Coldal;
    }