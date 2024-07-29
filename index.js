const axios = require('axios');

// Function to fetch weather data
async function fetchWeatherData() {
  try {
    // Make a GET request to Tomorrow.io API
    const response = await axios.get('https://api.tomorrow.io/v4/weather/forecast', {
      params: {
        location: '42.3478,-71.0466',
        apikey: '2mR0ERKligllRhY3HZd3UOyHkahZZuLJ'
      }
    });

    // Extract the minutely weather data
    const data = response.data;
    const minutelyData = data.timelines.minutely;

    // Process each minute's data
    minutelyData.forEach(entry => {
      const time = entry.time;
      const temperature = entry.values.temperature;
      const weatherCode = entry.values.weatherCode;
      const weatherDescription = getWeatherDescription(weatherCode);

      // Print the weather details
      console.log(`Time: ${time}`);
      console.log(`Temperature: ${temperature}°C`);
      console.log(`Weather Status: ${weatherDescription}`);
      console.log('--------------------------');
    });
  } catch (error) {
    // Handle errors
    console.error('Error fetching weather data:', error.message);
  }
}

// Function to map weather codes to descriptions
function getWeatherDescription(weatherCode) {
  // Weather code to description mapping
  const weatherDescriptions = {
    1000: 'Clear',
    1001: 'Cloudy',
    // Add more codes and descriptions according to Tomorrow.io documentation
  };

  return weatherDescriptions[weatherCode] || 'Unknown';
}

// Execute the function to fetch weather data
fetchWeatherData();
