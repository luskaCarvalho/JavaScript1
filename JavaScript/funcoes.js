function somar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = "A soma dos números é: " + res;
}//fim do método

function subtrair(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = "A subtração dos números é: " + res;
}//fim do método

function multiplicar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = "A multiplicação dos números é: " + res;
}//fim do método

function dividir(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    if(num2 <= 0){
        res = "Impossível dividir por número menores ou iguais a zero!";
    }else{
        res = num1 / num2;
    }
    //Faço a resposta
    document.getElementById("resultado").innerHTML = "A divisão dos números é: " + res;
}//fim do método

function tabuada(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i = 0; i <= 10; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
    }

    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n\n" + resNum2;
}//fim do método

//Faça uma função para calcular a potência
function potencia(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    document.getElementById("resultado").innerHTML = "A potência é: " + Math.pow(num1, num2);
}
//Faça uma função para calcular a raiz dos dois números
function raiz(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    document.getElementById("resultado").innerHTML = "\nA raiz de " + num1 + " é: " + Math.sqrt(num1) +
    "\nA raiz de " + num2 + " é: " + Math.sqrt(num2);
}
//Faça uma função para calcular a fórmula de bhaskara
function bhaskara(){
    var a;
    var b;
    var c;
    var delta;
    var x1;
    var x2;

    a = parseInt(document.getElementById("tpNum").value);
    b = parseInt(document.getElementById("tsNum").value);
    c = parseInt(document.getElementById("ttNum").value);

    //1ª Calcular delta
    delta = Math.pow(b,2) - 4 * a * c;

    //2ª Parte: Calcular x1 e x2 se delta não for negativo
    if(delta >= 0){
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);
    }else{
        x1 = "Impossível calcular x1, pois o delta é negativo";
        x2 = "Impossível calcular x2, pois o delta é negativo";
    }

    //Mostrar na tela
    document.getElementById("resultado").innerHTML = 
    "\nDelta: " + delta + "\n\nX1: " + x1 + "\nX2: " + x2;
}//fim do método

function parImpar(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    if(num1 => num1 % 2 === 0){
        
    }else(num1 => num1)  %{

    }

    document.getElementById("resultado").innerHTML = "A potência é: " + Math.pow(num1, num2);
}

function numerosPares(){
    var res = "Pares de 1 a 20:"
        for(i=1; i<21; i++){
            if(i % 2 ==0){
                res +="\n" + i;
            }
        }
    document.getElementById("resultado").value = "\n" + res;
}
function numerosCem(){
    var res = "soma de 1 a 100:"
        for(i=1; i<=100; i++){
            if(i % 5 ==0){
                res +="\n" + i;
            }
        }
    document.getElementById("resultado").value = "\n" + res;
}
function numerosMultiplos(){
    var res = "soma de 1 a 100:"
        for(i=5; i<=50; i++){
            if(i % 5 ==0){
                res +="\n" + i;
            }
        }
    document.getElementById("resultado").value = "\n" + res;
}
function numerosContados(){
    
    var num1;
    
    
        num1 = parseInt(document.getElementById("tpNum").value);
        
        for(i=1; i<num1; i++){
            if(i % 1 ==0){
                res +="\n" + i;
            }
        }
    
    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n\n" + resNum2;
    //fim do método
}
