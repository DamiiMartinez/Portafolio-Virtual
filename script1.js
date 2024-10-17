function mostrarTP1(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Por cada linea de la entrada, el programa escribir a ESGRITO si el texto tiene mas signos de exclamacion que letras (del abecedario ingles), y escrito en caso contrario'
                                     + '</p>';
    var url1 = 'Imagenes/TP1 - Antes.png';
    var url2 = 'Imagenes/TP1 - Despues.png';

    var image1 = new Image();
    image1.src = url1;

    var image2 = new Image();
    image2.src = url2;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="750px";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="750px";
    }

    document.getElementById('1').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 1){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarTP2(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Realizar un programa que liste todos los números abundantes hasta un numero ingresado con una función llamada EsAbundante(n) que devuelve un valor boolean.'
                                     + '</p>' ;
    var url1 = 'Imagenes/TP2 - Antes.png';
    var url2 = 'Imagenes/TP2 - Despues.png';

    var image1 = new Image();
    image1.src = url1;

    var image2 = new Image();
    image2.src = url2;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="750px";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="750px";
    }

    document.getElementById('2').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 2){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarTP3(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Deben diferenciar si el verbo termina en AR - ER o IR -anteúltima letra- y para cada conjugación deberán hacer una función teniendo en cuenta el verbo ingresado.'
                                     + '</p>' 

                                     + '<ul>'
                                     + '<li>'
                                     + '<p>'
                                     + 'Tiempo Presente = A'
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + 'Tiempo Preterito = P'
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + 'Tiempo Futuro = F'
                                     + '</p>' 
                                     + '</li>'
                                     + '</ul>';
    var url1 = 'Imagenes/TP3 - Antes.png';
    var url2 = 'Imagenes/TP3 - Despues.png';

    var image1 = new Image();
    image1.src = url1;

    var image2 = new Image();
    image2.src = url2;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="750px";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="750px";
    }

    document.getElementById('3').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 3){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarTP4(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Diseñar un programa que tenga que dada la fecha del sistema del sistema. Calcular: '
                                     + '</p>' 

                                     + '<ul>'
                                     + '<li>'
                                     + '<p>'
                                     + 'Cantidad de días que falta para año nuevo con una función llamada CantidaddiasAnioNuevo($fecha)'
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + 'Cantidad de meses que la selección Argentina es campeona del mundo una función llamada CantidadMesesCampeon($fecha)'
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + 'Cantidad de años de tu nacimiento con una función llamada CantidadAniosNacimiento($fecha)'
                                     + '</p>'
                                     + '</li>'
                                     + '</ul>';
    var url1 = 'Imagenes/TP4.png';

    var image1 = new Image();
    image1.src = url1;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="750px";
    }

    document.getElementById('4').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 4){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarTP5(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Generar un vector llamado A de N elementos (N ingresado por teclado) con números aleatorios menores a 32000. Realizar y mostrar las siguientes funciones: '
                                     + '</p>' 

                                     + '<ul>'
                                     + '<li>'
                                     + '<p>'
                                     + 'Calcular el promedio de los elementos del vector (devuelve un float)'
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + 'Generar un vector llamado B con los elementos mayores al promedio del vector A. (Devuelve un vector)'
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + 'Contar la cantidad de elementos que son múltiplos a la vez de 2 y 3 (devuelve un int) '
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + 'Calcular la suma de todos los elementos del vector (devuelve un int) '
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + 'Generar un vector llamado C con los elementos del vector A multiplicado por 2. (devuelve un vector)'
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + 'Mostrar los resultados de todas las funciones y los vectores A,B y C.'
                                     + '</p>' 
                                     + '</li>'
                                     + '</ul>';
    var url1 = 'Imagenes/TP5 - Antes.png';
    var url2 = 'Imagenes/TP5 - Despues.png';

    var image1 = new Image();
    image1.src = url1;

    var image2 = new Image();
    image2.src = url2;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="750px";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="750px";
    }

    document.getElementById('5').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 5){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarTP6(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Nuestra Presidenta tiene algunos números secretos, por lo que, en caso de emergencia, puede usarlo para ponerse en contacto con la SIDE(Servicio Inteligencia Del Estado) y salvarla. Pero estos números tienen algunas características especiales, son primos y la suma de los dígitos individuales son también primos. Como 23, es el número primo y la suma de sus dígitos (2 + 3) = 5, también es un número primo.'
                                     + '</p>'

                                     + '<p>'
                                     + 'Así que su tarea es imprimir todos los números en un rango dado, a, b(ambos incluidos), en orden ascendente. Utilizando función bool EsPrimo(int n)'
                                     + '</p>' ;
    var url1 = 'Imagenes/TP6 - Antes.png';
    var url2 = 'Imagenes/TP6 - Despues.png';

    var image1 = new Image();
    image1.src = url1;

    var image2 = new Image();
    image2.src = url2;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="750px";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="750px";
    }

    document.getElementById('6').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 6){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarTP7(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Generar 1 vector con números aleatorios menores a 10.'
                                     + '</p>' 

                                     + '<p>'
                                     + 'Dado un conjunto, o distribuci ́on, de valores se define la moda como el valor (o valores) que mas se repite en dicho conjunto. En este problema te pedimos que calcules la moda de un conjunto de numeros.'
                                     + '</p>' ;
    var url1 = 'Imagenes/TP7 - Antes1.png';
    var url2 = 'Imagenes/TP7 - Antes2.png';
    var url3 = 'Imagenes/TP7 - Despues.png';

    var image1 = new Image();
    image1.src = url1;

    var image2 = new Image();
    image2.src = url2;

    var image3 = new Image();
    image3.src = url3;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="90%";
        let imagen3 = document.getElementById('caja').appendChild(image3).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="750px";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="750px";
        let imagen3 = document.getElementById('caja').appendChild(image3).style.width="750px";
    }

    document.getElementById('7').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 7){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}




function mostrarTP8(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Manipular estilos de la pagina con JavaScript: '
                                     + '</p>'
                                     + '<ul>'
                                     + '<li>' + 'getElementById' + '</li>'
                                     + '<li>' + 'childNodes - Children' + '</li>'
                                     + '<li>' + 'ChildNodes - nodeValue' + '</li>'
                                     + '<li>' + 'parentNode' + '</li>'
                                     + '<li>' + 'nextSibling - previousSibling - nextElementSibling - previousElementSibling' + '</li>'
                                     + '<li>' + 'firstChild - lastChild - firstElementChild - lastElementChild' + '</li>'
                                     + '<li>' + 'getElementsByTagByName' + '</li>'
                                     + '<li>' + 'appendChild - createTextNode' + '</li>'
                                     + '<li>' + 'removeChild - hasChildNodes' + '</li>'
                                     + '<li>' + 'createElement - appendChild' + '</li>'
                                     + '<li>' + 'insertBefore - createElement' + '</li>'
                                     + '<li>' + 'removeChild' + '</li>'
                                     + '<li>' + 'setAttribute' + '</li>';
                                     + '</ul>';

    document.getElementById('8').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 8){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarTP9(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'La estrategia que utilizan es la siguiente: ciertos trozos disjuntos (o sea sin superposición) del texto los escriben en orden inverso y los encierran entre paréntesis, de manera tal de no olvidar que esos trozos deben ser leídos al revés.'
                                     + '</p>' ;
    var url1 = 'Imagenes/TP9 - Antes.png';
    var url2 = 'Imagenes/TP9 - Despues.png';

    var image1 = new Image();
    image1.src = url1;

    var image2 = new Image();
    image2.src = url2;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="650px";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="650px";
    }

    document.getElementById('9').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 9){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarTP10(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + '1. Se reciben señales a guardar en un vector hasta que ingrese una señal negativa o se pueden generar números aleatorios menores a 360. o Ej: 100_ 200_50_330_ (se guardan 4 señales) o Crear una función getSeniales() que retorne un vector con las señales leídas.'
                                     + '</p>' 

                                     + '<p>'
                                     + '2. Crear una función string que dado un vector de señales, normalice cada señal y encuentre el cuadrante correspondiente para cada una de ellas, creando como salida una secuencia en letras(string) de los cuadrantes asociados.'
                                     + '</p>' 

                                     + '<p>'
                                     + 'a. Ej: ENTRADA 100_200_330_250'
                                     + '</p>' 

                                     + '<p>'
                                     + 'b. SALIDA N O E S'

                                     + '</p>' 

                                     + '<p>'
                                     + '3. Con la secuencia de cuadrantes anteriores encontrar la cantidad de ciclos completos, es decir las veces que se pasa por los cuatro cuadrantes en sentido horario o antihorario.'
                                     + '</p>' 

                                     + '<ul>'
                                     + 'a. Ej: '
                                     + '<li>' + ' NOSE' + '</li>'
                                     + '<li>' + ' ONES' + '</li>'
                                     + '<li>' + ' ENOS' + '</li>'
                                     + '<li>' + ' SONE' + '</li>'
                                     + '<li>' + ' SENO' + '</li>'
                                     + '<li>' + ' ESON' + '</li>'
                                     + '<li>' + ' OSEN' + '</li>'
                                     + '<li>' + ' NESO' + '</li>'
                                     + '</ul>' 

                                     + '<p>'
                                     + '4. Crear una función que calcule el porcentaje de ocurrencias de un cuadrante cualquiera.'
                                     + '</p>' 

                                     + '<ul>'
                                     + '<li>'
                                     + '<p>'
                                     + 'Mostrar el porcentaje que es recorrido cada cuadrante: N, S, E, O.'
                                     + '</p>'
                                     + '</li>'
                                     + '</ul>' 

                                     + '<p>'
                                     + 'En el main :'
                                     + '</p>' 

                                     + '<ul>'
                                     + '<li>'
                                     + '<p>'
                                     + ' leer la lista de señales.'
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + ' obtener la secuencia en letras de los cuadrantes.'
                                     + '</p>' 
                                     + '</li>'

                                     + '<li>'
                                     + '<p>'
                                     + ' mostrar la secuencia anterior.'
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + ' obtener y mostrar la cantidad de ciclos completos.'
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + ' obtener y mostrar el porcentaje que es recorrido cada cuadrante.'
                                     + '</p>'
                                     + '</li>'
                                     + '</ul>';

    document.getElementById('10').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 10){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarTP11(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Filtrar numeros de un archivo de texto e identificar aquellos que empiecen y terminen con el mismo numero. Para ello, debe implementar la función filtranum(numeros, resultado).'
                                     + '</p>' 

                                     + '<p>'
                                     + 'Sus parámetros son:'
                                     + '</p>' 


                                     + '<ul>'
                                     + '<li>'
                                     + '<p>'
                                     + 'Numeros: Un arreglo de N enteros positivos, que son los números para analizar en busca de la propiedad.'
                                     + '</p>'
                                     + '</li>'

                                     + '<li>'
                                     + '<p>'
                                     + 'Resultado: Un arreglo en el cual se deben escribir los números con la propiedad. Es decir, al terminar de ejecutarse la función, este arreglo deberá contener exactamente aquellos números que cumplan la propiedad, entre los números dados como entrada en el parámetro numeros. Se deben dar en el mismo orden en el que aparecen en el arreglo numeros.'
                                     + '</p>' 
                                     + '</li>'
                                     + '</ul>';
    var url1 = 'Imagenes/TP11.png';
    var url2 = 'Imagenes/TP11-1.png';
    var url3 = 'Imagenes/TP11-2.png';

    var image1 = new Image();
    image1.src = url1;

    var image2 = new Image();
    image2.src = url2;

    var image3 = new Image();
    image3.src = url3;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="90%";
        let imagen3 = document.getElementById('caja').appendChild(image3).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="650px";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="650px";
        let imagen3 = document.getElementById('caja').appendChild(image3).style.width="650px";
    }

    document.getElementById('11').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 11){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarTP12(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Observe la siguiente secuencia: 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1'
                                     + '</p>' 

                                     + '<p>'
                                     + 'Cada número de la misma se ha obtenido como la mitad del anterior si éste era par o el triple más uno si era impar.'
                                     + '</p>' 

                                     + '<p>'
                                     + 'Se recibe un archivo matematico.in con:'
                                     + '</p>' 

                                     + '<ul>'
                                     + '<li>'
                                     + '<p>'
                                     + ' Una línea que indica la semilla S de la secuencia a estudiar ( 1 ≤ S < 10.000 )'
                                     + '</p>'
                                     + '</li>'
                                     + '</ul>' 

                                     + '<p>'
                                     + 'El largo de la secuencia nunca superará los 5.000 elementos.'
                                     + '</p>' 

                                     + '<p>'
                                     + 'Se debe generar matematico.out con:'
                                     + '</p>' 

                                     + '<ul>'
                                     + '<li>'
                                     + '<p>'
                                     + ' Una línea con el largo de la secuencia.'
                                     + '</p>'
                                     + '</li>' 

                                     + '<li>'
                                     + '<p>'
                                     + ' Una línea con el mayor número que hayas encontrado en la secuencia.'
                                     + '</p>' 
                                     + '</li>'
                                     + '</ul>';

    var url1 = 'Imagenes/TP12-1.png';
    var url2 = 'Imagenes/TP12-2.png';

    var image1 = new Image();
    image1.src = url1;

    var image2 = new Image();
    image2.src = url2;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="750px";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="750px";
    }

    document.getElementById('12').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 12){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarJS(){
    let elemento = document.getElementById('caja');
    let texto1 = elemento.innerHTML= '<p>'
                                     + 'Realizar 3 Trabajos Practicos utilizando Clases en JS.'
                                     + '</p>' 

                                     + '<h1>'
                                     + '1C Js class - 01 Constructores - get y set: CZooAnimal'
                                     + '</h1>'
                                     + '<img src="Imagenes/JSClass1.png" height= "400" width="875">'

                                     + '<h1>'
                                     + '1C Js class - 02 - Autores'
                                     + '</h1>' 
                                     + '<img src="Imagenes/JSClass2.png" height= "400" width="875">'

                                     + '<h1>'
                                     + '1C Js class - 03 - Jugadores'
                                     + '</h1>'
                                     + '<img src="Imagenes/JSClass3.png" height= "400" width="875">';

    document.getElementById('13').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 13){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarStock(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<a href="">'
                                     + 'Ver Sistema de Stock'
                                     + '</a>';

    document.getElementById('1').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 1){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarPKI(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Por cada linea de la entrada, el programa escribir a ESGRITO si el texto tiene mas signos de exclamacion que letras (del abecedario ingles), y escrito en caso contrario'
                                     + '</p>';
    var url1 = 'Imagenes/TP1 - Antes.png';
    var url2 = 'Imagenes/TP1 - Despues.png';

    var image1 = new Image();
    image1.src = url1;

    var image2 = new Image();
    image2.src = url2;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="750px";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="750px";
    }

    document.getElementById('1').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 1){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}

function mostrarINET(){
    let elemento = document.getElementById('caja');
    let texto = elemento.innerHTML= '<p>'
                                     + 'Por cada linea de la entrada, el programa escribir a ESGRITO si el texto tiene mas signos de exclamacion que letras (del abecedario ingles), y escrito en caso contrario'
                                     + '</p>';
    var image1 = new Image();
    image1.src = url1;

    var image2 = new Image();
    image2.src = url2;

    if(elemento.style.height < '700px'){
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="90%";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="90%";
    }

    else{
        let imagen1 = document.getElementById('caja').appendChild(image1).style.width="750px";
        let imagen2 = document.getElementById('caja').appendChild(image2).style.width="750px";
    }

    document.getElementById('1').style.color='red';
    for(let i=1; i<=13; i++){
        let count = i;
        if(count != 1){
            document.getElementById(count).style.color='#0056b3';
        }
    }
}