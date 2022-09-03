const form = document.querySelector('.form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso   = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');  
    

    const peso   = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(peso == false && altura == false){
        setResultado('Peso e Altura Invalida', false);
        return;
    }
    if(peso == false){
        setResultado('Peso Invalido', false);
        return;
    }
    if(altura == false){
        setResultado('Altura Invalido', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);

});
function getNivelImc(imc){
    const arrayNivel = [
        'Abaixo do peso',
        'Peso Normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ];

    if(imc >= 39.9){
        return arrayNivel[5];
    }
    if(imc >= 34.9){
        return arrayNivel[4];
    }
    if(imc >= 29.9){
        return arrayNivel[3];
    }
    if(imc >= 24.9){
        return arrayNivel[2];
    }
    if(imc >= 18.5){
        return arrayNivel[1];
    }
    if(imc < 18.5){
        return arrayNivel[0];
    }
}

function getImc(peso, altura){
    const imc =  peso / (altura ** 2);
    return imc.toFixed(2);
}

function criaP(){
    const  p = document.createElement('p');
    return p; 
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    }
    else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

}


