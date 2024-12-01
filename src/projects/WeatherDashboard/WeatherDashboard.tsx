import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Search, Loader } from 'lucide-react';

interface WeatherData {
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

const WeatherDashboard = () => {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeatherIcon = (description: string) => {
    if (description.includes('rain')) return <CloudRain className="w-16 h-16 text-blue-400" />;
    if (description.includes('cloud')) return <Cloud className="w-16 h-16 text-gray-400" />;
    return <Sun className="w-16 h-16 text-yellow-400" />;
  };

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      // Simulated API response for demo
      await new Promise(resolve => setTimeout(resolve, 1000));
      setWeather({
        temp: Math.round(Math.random() * 15 + 10), // Random temp between 10-25°C
        description: ['sunny', 'cloudy', 'rainy'][Math.floor(Math.random() * 3)],
        humidity: Math.round(Math.random() * 30 + 50), // Random humidity between 50-80%
        windSpeed: Math.round(Math.random() * 15 + 5), // Random wind speed between 5-20 km/h
      });
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-1 px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={fetchWeather}
            disabled={loading}
            className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            {loading ? <Loader className="w-6 h-6 animate-spin" /> : <Search className="w-6 h-6" />}
          </button>
        </div>

        {error && (
          <div className="text-red-400 text-center mb-4">{error}</div>
        )}

        {weather && !error && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-2">{city}</h2>
              <div className="flex justify-center mb-4">
                {getWeatherIcon(weather.description)}
              </div>
              <p className="text-4xl font-bold text-white">{weather.temp}°C</p>
              <p className="text-gray-300 capitalize">{weather.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-gray-700/30 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Wind className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Wind Speed</p>
                  <p className="text-lg font-semibold text-white">{weather.windSpeed} km/h</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Cloud className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Humidity</p>
                  <p className="text-lg font-semibold text-white">{weather.humidity}%</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;