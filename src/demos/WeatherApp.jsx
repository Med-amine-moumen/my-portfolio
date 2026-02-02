import { useState } from 'react'
import { Cloud, CloudRain, Sun, Wind, Droplets, Search } from 'lucide-react'

const WeatherApp = () => {
  const [city, setCity] = useState('Agadir')
  const [weather, setWeather] = useState({
    temp: 22,
    condition: 'Sunny',
    humidity: 65,
    windSpeed: 12,
    city: 'Agadir'
  })

  const weatherData = {
    'Agadir': { temp: 22, condition: 'Sunny', humidity: 65, windSpeed: 12 },
    'Casablanca': { temp: 18, condition: 'Cloudy', humidity: 75, windSpeed: 20 },
    'Marrakech': { temp: 25, condition: 'Sunny', humidity: 45, windSpeed: 8 },
    'Rabat': { temp: 19, condition: 'Partly Cloudy', humidity: 70, windSpeed: 15 },
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const data = weatherData[city] || weatherData['Agadir']
    setWeather({ ...data, city })
  }

  const getWeatherIcon = () => {
    if (weather.condition.includes('Sunny')) return <Sun className="w-24 h-24 text-yellow-400" />
    if (weather.condition.includes('Rain')) return <CloudRain className="w-24 h-24 text-blue-400" />
    return <Cloud className="w-24 h-24 text-gray-300" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">🌤️ Weather Dashboard</h1>
        
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSearch} className="flex gap-2 mb-8">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="flex-1 px-4 py-3 rounded-lg bg-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white/30 hover:bg-white/40 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Search className="w-5 h-5" /> Search
            </button>
          </form>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">{weather.city}</h2>
            <div className="flex justify-center mb-4">
              {getWeatherIcon()}
            </div>
            <div className="text-6xl font-bold text-white mb-2">{weather.temp}°C</div>
            <div className="text-2xl text-white/80">{weather.condition}</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <Droplets className="w-8 h-8 text-white mx-auto mb-2" />
              <div className="text-white/80 text-sm">Humidity</div>
              <div className="text-2xl font-bold text-white">{weather.humidity}%</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <Wind className="w-8 h-8 text-white mx-auto mb-2" />
              <div className="text-white/80 text-sm">Wind Speed</div>
              <div className="text-2xl font-bold text-white">{weather.windSpeed} km/h</div>
            </div>
          </div>

          <div className="mt-6 text-center text-white/60 text-sm">
            Try: Agadir, Casablanca, Marrakech, Rabat
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
