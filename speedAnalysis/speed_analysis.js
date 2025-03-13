let testText = "La palabra mas rápida del oeste."
let startTime, endTime;

function startTest(){
    document.getElementById('inputText').value = testText;

    document.getElementById('output').innerHTML = "";
    startTime = new Date().getTime();

    var button = document.getElementById("btn");
    button.innerHTML = "Finalizar Prueba";
    button.onclick = endTest;
}

function endTest(){
    endTime = new Date().getTime();

    document.getElementById('userInput').readOnly = true;

    var timeElapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById('userInput').value;

    var typeWords = userTypedText.split(/\s+/).filter(word => word !== "").length;

    var wpm = 0;

    if(timeElapsed !== 0 && !isNaN(typeWords)){
        wpm = Math.round((typeWords / timeElapsed) * 60);

    }

    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2> Resultados de la prueba de escritura:</h2>'+
        "<p>Total de Longitud: " + userTypedText.length + '</p>' +  
        "<p>Palabras Escribidas: " + typeWords + '</p>' +  
        "<p>Tiempo Transcurrido: " + timeElapsed.toFixed(2) + ' segundos</p>' +  
        "<p>Palabras Por Minuto (WPM): " + wpm + '</p>';  
    
    var button = document.getElementById('btn');
    button.innerHTML = "Iniciar Prueba";
    button.onclick = startTest;
}
