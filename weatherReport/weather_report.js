function showweatherDetails(event){
    event.preventDefault();

    const lat = document.getElementById('lat').value.trim();
    const lon = document.getElementById('lon').value.trim();
    const apiKey = 'cf84626de54818fb6d14b394837890e3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;


    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if(data.cod !== 200){
            throw new Error (data.message) 
        }
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperatura: ${data.main.temp} &#8451</p>
                                <p>Clima: ${data.weather[0].description}</p>`
    })
    .catch(error => {
        console.log('Error de busqueda', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Fallo en busqueda de Clima. Por favor Intente Nuevamente</p>`
    })
}
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);