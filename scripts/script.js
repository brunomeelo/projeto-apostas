
let msValor1 = document.getElementById("msn1");
let msValor2 = document.getElementById("msn2");
let msValor3 = document.getElementById("msn3");
let msValor4 = document.getElementById("msn4");
let msValor5 = document.getElementById("msn5");
let msValor6 = document.getElementById("msn6");

let lotoValor1 = document.getElementById("loto1");
let lotoValor2 = document.getElementById("loto2");
let lotoValor3 = document.getElementById("loto3");
let lotoValor4 = document.getElementById("loto4");
let lotoValor5 = document.getElementById("loto5");
let lotoValor6 = document.getElementById("loto6");
let lotoValor7 = document.getElementById("loto7");
let lotoValor8 = document.getElementById("loto8");
let lotoValor9 = document.getElementById("loto9");
let lotoValor10 = document.getElementById("loto10");
let lotoValor11 = document.getElementById("loto11");
let lotoValor12 = document.getElementById("loto12");
let lotoValor13 = document.getElementById("loto13");
let lotoValor14 = document.getElementById("loto14");
let lotoValor15 = document.getElementById("loto15");

let quinaValor1 = document.getElementById("quina1");
let quinaValor2 = document.getElementById("quina2");
let quinaValor3 = document.getElementById("quina3");
let quinaValor4 = document.getElementById("quina4");
let quinaValor5 = document.getElementById("quina5");

let numerosSorteados = [];
let resultado = "";

function sortearMega(){
    while(numerosSorteados.length < 6){
        let aleatorio = Math.floor( Math.random() * 60 + 1);
        if(numerosSorteados.indexOf(aleatorio) == -1){
            resultado += aleatorio + "";
            numerosSorteados.push(aleatorio);
        }
        
    }
    msValor1.innerHTML = `<p>${numerosSorteados[0]}</p>`;
    msValor2.innerHTML = `<p>${numerosSorteados[1]}</p>`;
    msValor3.innerHTML = `<p>${numerosSorteados[2]}</p>`;
    msValor4.innerHTML = `<p>${numerosSorteados[3]}</p>`;
    msValor5.innerHTML = `<p>${numerosSorteados[4]}</p>`;
    msValor6.innerHTML = `<p>${numerosSorteados[5]}</p>`;
    numerosSorteados.length = 0;
}

function sortearLoto(){
    while(numerosSorteados.length < 15){
        let aleatorio = Math.floor( Math.random() * 25 + 1);
        if(numerosSorteados.indexOf(aleatorio) == -1){
            resultado += aleatorio + "";
            numerosSorteados.push(aleatorio);
        }
    }
    lotoValor1.innerHTML = `<p>${numerosSorteados[0]}</p>`;
    lotoValor2.innerHTML = `<p>${numerosSorteados[1]}</p>`;
    lotoValor3.innerHTML = `<p>${numerosSorteados[2]}</p>`;
    lotoValor4.innerHTML = `<p>${numerosSorteados[3]}</p>`;
    lotoValor5.innerHTML = `<p>${numerosSorteados[4]}</p>`;
    lotoValor6.innerHTML = `<p>${numerosSorteados[5]}</p>`;
    lotoValor7.innerHTML = `<p>${numerosSorteados[6]}</p>`;
    lotoValor8.innerHTML = `<p>${numerosSorteados[7]}</p>`;
    lotoValor9.innerHTML = `<p>${numerosSorteados[8]}</p>`;
    lotoValor10.innerHTML = `<p>${numerosSorteados[9]}</p>`;
    lotoValor11.innerHTML = `<p>${numerosSorteados[10]}</p>`;
    lotoValor12.innerHTML = `<p>${numerosSorteados[11]}</p>`;
    lotoValor13.innerHTML = `<p>${numerosSorteados[12]}</p>`;
    lotoValor14.innerHTML = `<p>${numerosSorteados[13]}</p>`;
    lotoValor15.innerHTML = `<p>${numerosSorteados[14]}</p>`;

    numerosSorteados.length = 0;
    
}

function sortearQuina(){
    while(numerosSorteados.length < 5){
        let aleatorio = Math.floor( Math.random() * 80 + 1);
        if(numerosSorteados.indexOf(aleatorio) == -1){
            resultado += aleatorio + "";
            numerosSorteados.push(aleatorio);
        }
        
    }
    quinaValor1.innerHTML = `<p>${numerosSorteados[0]}</p>`;
    quinaValor2.innerHTML = `<p>${numerosSorteados[1]}</p>`;
    quinaValor3.innerHTML = `<p>${numerosSorteados[2]}</p>`;
    quinaValor4.innerHTML = `<p>${numerosSorteados[3]}</p>`;
    quinaValor5.innerHTML = `<p>${numerosSorteados[4]}</p>`;
    
    numerosSorteados.length = 0;
}


