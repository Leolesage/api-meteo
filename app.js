document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    console.log('Ville saisie :', city); // Log la ville entrée

    const apiKey = '94fce1a3220e37ce7f22dd2097b786d0'; // Remplace par ta clé API valide
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    
    console.log('URL de l\'API :', apiUrl); // Log l'URL de l'API

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log('Réponse de l\'API :', data); // Log la réponse de l'API

        const weatherDiv = document.getElementById('weather');
        if (data.cod === 200) {
            weatherDiv.innerHTML = `
                <h2>Météo pour ${data.name}</h2>
                <p>Température: ${data.main.temp}°C</p>
                <p>Météo: ${data.weather[0].description}</p>
            `;
        } else {
            weatherDiv.innerHTML = `<p>Ville non trouvée. Essayez encore.</p>`;
            console.log('Erreur : Ville non trouvée');
        }
    })
    .catch(error => {
        console.log('Erreur lors de la récupération des données :', error);
        document.getElementById('weather').innerHTML = `<p>Erreur lors de la récupération des données.</p>`;
    });
});
