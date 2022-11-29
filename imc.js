
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    
    var calculo = (peso / (altura * altura)).toFixed(1);
 
    if (nome !== '' && altura !== '' && peso !== '') {
        resultado.textContent = (nome + ', seu IMC é :'+ calculo)
    }else {
        resultado.textContent = 'Preencha todos os campos'
    }

    //var calculo = peso.value / (altura.value * altura.value);
}

calcular.addEventListener('click', imc);

