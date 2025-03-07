let count = 0; //punto de partida para el conteo

function increaseCount(){
    count++
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById("countDisplay").innerHTML=count;

}

function checkCountValue(){
    if(count === 10){
        alert("Tu publicación en Insta ganó 10 seguidores")
    } else if(count === 20){
        alert("Tu publicación en Insta ganó 20 seguidores")

    }
}