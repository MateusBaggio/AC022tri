function WHILE(){
    n = parseInt(document.getElementById("positivo").value);
    i = 1;
    contagem = 0;

    while(i<=n){
        if(n%i==0){
            contagem++
        }
            i++
    }
    if(contagem==2){
        alert("O número é primo!!!")
    }
    else{
        alert("O número NÃO é primo")
    }

}

function DOWHILE(){
    n = parseInt(document.getElementById("positivo").value);
    i = 1;
    contagem = 0;
    
    do{
        if(n%i==0){
            contagem++
        }
            i++
    } while(i<=n)

    if(contagem==2){
        alert("O número é primo!!!");
    }
    else{
        alert("O número NÃO é primo");
    }
}

function FOR(){
    n = parseInt(document.getElementById("positivo").value);
    contagem = 0;

    for(i=1; i<=n; i++){

        if(n%i==0){
            contagem++
        }
    }
    if(contagem==2){
        alert("O número é primo!!!");
    }
    else{
        alert("O número NÃO é primo");
    }
}

function WHILE1(){
    n = parseInt(document.getElementById("numero").value);
    i=1;
    par = 0;
    impar = 0;
    valorpares = 2
    valorimpares = 1

    while(i<=n){
        par +=  valorpares
        impar += valorimpares
        valorpares += 2
        valorimpares += 2
        i++
    }
    alert(` Soma dos PARES = ${par} Soma dos IMPARES = ${impar}`)
}

function DOWHILE1(){
    n = parseInt(document.getElementById("numero").value);
    i=1;
    par = 0;
    impar = 0;
    valorpares = 2
    valorimpares = 1

    do{
        par +=  valorpares
        impar += valorimpares
        valorpares += 2
        valorimpares += 2
        i++
    } while(i<=n)

    alert(` Soma dos PARES = ${par} Soma dos IMPARES = ${impar}`)
    
}

function FOR1(){
    n = parseInt(document.getElementById("numero").value);
    par = 0;
    impar = 0;
    valorpares = 2
    valorimpares = 1
    
    for(i=1; i<=n; i++){
        par +=  valorpares
        impar += valorimpares
        valorpares += 2
        valorimpares += 2
    }
    alert(` Soma dos PARES = ${par} Soma dos IMPARES = ${impar}`)
}

function WHILE2(){
    n = parseInt(document.getElementById("ultimo").value);
    n1= 0;
    n2= 1;
    i = 3;
    resultado = 0;

    document.getElementById("resposta").innerHTML=n1 + "=>" + n2;

    while(i<=n){
        resultado = n1+n2;
        document.getElementById("resposta").innerHTML+=`=>`+ resultado;
        n1 = n2;
        n2 = resultado;
        i++;

    }
}

function DOWHILE2(){
    n = parseInt(document.getElementById("ultimo").value);
    n1= 0;
    n2= 1;
    i = 3;
    resultado = 0;

    document.getElementById("resposta").innerHTML=n1 + "=>" + n2;

    do{
        resultado = n1+n2;
        document.getElementById("resposta").innerHTML+=`=>`+ resultado;
        n1 = n2;
        n2 = resultado;
        i++;
    }while(i<=n)
}

function FOR2(){
    n = parseInt(document.getElementById("ultimo").value);
    n1= 0;
    n2= 1;
    i = 3;
    resultado = 0;

    document.getElementById("resposta").innerHTML=n1 + "=>" + n2;

    for(i=3; i<=n; i++){
        resultado = n1+n2;
        document.getElementById("resposta").innerHTML+=`=>`+ resultado;
        n1 = n2;
        n2 = resultado;
    }
}
