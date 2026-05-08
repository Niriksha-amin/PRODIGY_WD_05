const apiKey = "4b996fd7914d68c23ec157e66b60c849";

async function getWeather() {

    const city = document.getElementById("city").value;
    const resultDiv = document.getElementById("result");

    if(city === ""){
        resultDiv.innerHTML = "Please enter a city ❗";
        return;
    }

    try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        const data = await response.json();
        console.log(data);

        if(data.cod !== 200){
            resultDiv.innerHTML = "City not found ❌";
            return;
        }

        resultDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temp: ${data.main.temp} °C</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>💨 Wind: ${data.wind.speed} km/h</p>
        `;

    } catch(error){
        resultDiv.innerHTML = "Error fetching data 😢";
        console.log(error);
    }
}