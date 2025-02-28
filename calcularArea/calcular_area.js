let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText =`El area del rectangulo es: ${area}`;
}

function groceryTracker(){
    let gro1 = parseFloat(document.getElementById('grocery1').value); 
    let gro2 = parseFloat(document.getElementById('grocery2').value); 
    let gro3 = parseFloat(document.getElementById('grocery3').value); 

    let Total_grocery = gro1 + gro2 + gro3;

    document.getElementById("result_grocery").innerText = `La suma total de los alimentos es: ${Total_grocery}`

}