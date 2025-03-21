function showweatherDetails(event){
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'cf84626de54818fb6d14b394837890e3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
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