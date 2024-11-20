const dotenv = require('dotenv');
dotenv.config();


// TODO: Define an interface for the Coordinates object

interface Coordinates {
  lat: number;
  lon: number;
}
interface Coordinates {
  cityName: string;
}

// TODO: Define a class for the Weather object

class weatherObject {
  // TODO: Define properties for city, country, latitude, and longitude
  city: string;
  temperature: number;
  description: string;
  icon: string;
  date: typeof dayjs | string;
  humidity: number;
  windSpeed: number;

  

  constructor(city: string, temperature: number, description: string, icon: string, date: string, humidity: number, windSpeed: number) {
    this.city = city;
    this.temperature = temperature;
    this.description = description;
    this.icon = icon;
    this.date = date;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
  }
};

// TODO: Complete the WeatherService class
class WeatherService {
  getWeather(_city: any) {
    throw new Error('Method not implemented.');
  }
  // TODO: Define the baseURL, API key, and city name properties

  baseURL: string;
  APIKey: string;
  cityName: string;

  constructor() {
    this.cityName = "";
    this.baseURL = process.env.API_BASE_URL || 'https://api.openweathermap.org';
    this.APIKey = process.env.API_KEY || '8f54eafa1540dc8f8ba0838b701912cc';
  }

  // TODO: Create fetchLocationData method

  fetchLocationData(query: string): Promise<Coordinates> {
    return fetch(`${this.baseURL}/geo/1.0/direct?q=${query}&limit=1&appid=${this.APIKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          throw new Error('City not found');
        }
        return {
          lat: data[0].lat,
          lon: data[0].lon,
          cityName: query,
        };
      });
  }
  // private async fetchLocationData(query: string) {}
  
  // TODO: Create destructureLocationData method

  private destructureLocationData(locationData: Coordinates): Coordinates {
    return {
      lat: locationData.lat,
      lon: locationData.lon,
      cityName: locationData.cityName,
    };
  }
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  
  // TODO: Create buildGeocodeQuery method

  buildGeocodeQuery(cityName: string): string {
    return `${cityName}, us`;
  }
  // private buildGeocodeQuery(): string {}
  
  // TODO: Create buildWeatherQuery method

  buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.baseURL}/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${this.APIKey}`;
  }
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  
  // TODO: Create fetchAndDestructureLocationData method

  async fetchAndDestructureLocationData(): Promise<Coordinates> {
    const geocodeQuery = this.buildGeocodeQuery(this.cityName);
    const locationData = await this.fetchLocationData(geocodeQuery);
    return this.destructureLocationData(locationData);
  }

  //   // TODO: Create fetchWeatherData method
 
  async fetchWeatherData(coordinates: Coordinates): Promise<weatherObject> {
    const weatherQuery = this.buildWeatherQuery(coordinates);
    const response = await fetch(weatherQuery);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const weatherData = await response.json();
    if (!weatherData) {
      throw new Error('Weather data is undefined');
    }
    const currentWeather = weatherData.list[0];
    // const forecastArray = this.buildForecastArray(forecastData);
    return new weatherObject(
          this.cityName,
          currentWeather.main.temp,
          currentWeather.weather[0].description,
          currentWeather.weather[0].icon,
          currentWeather.dt,
          currentWeather.main.humidity,
          currentWeather.wind.speed,
        );
  }
  // private async fetchAndDestructureLocationData() {}
  
  
  // TODO: Build parseCurrentWeather method

  private parseCurrentWeather(response: any): WeatherObject {
    return {
      city: this.cityName,
      temperature: response.main.temp,
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      date: response.dt,
      humidity: response.main.humidity,
      windSpeed: response.wind.speed,
    };
  }




  // private parseCurrentWeather(response: any) {}
  
  // TODO: Complete buildForecastArray method

  buildForecastArray(weatherData: any[]): any[] {
    const forecastArray = weatherData.map((dayData) => ({
      date: new Date(dayData.dt * 1000),
      temperature: dayData.temp.day,
      description: dayData.weather[0].description,
      icon: dayData.weather[0].icon,
    }));
    return forecastArray;
  }
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  
// Assuming weatherObject is defined somewhere in your code
type WeatherObject = {
  // Define the properties of the weather object here
  temperature: number;
  humidity: number;
  windSpeed: number;
  // Add other properties as needed
};

class WeatherService {
  cityName: string;

  // TODO: Complete getWeatherForCity method
  getWeatherForCity(city: string): Promise<WeatherObject> {
    this.cityName = city;
    console.log(city);

    return this.fetchAndDestructureLocationData().then((coordinates) => {
      return this.fetchWeatherData(coordinates);
    });
  }

  // Placeholder for fetchAndDestructureLocationData method
  private fetchAndDestructureLocationData(): Promise<{ lat: number; lon: number }> {
    // Implementation here
    return Promise.resolve({ lat: 0, lon: 0 }); // Replace with actual implementation
  }

  // Placeholder for fetchWeatherData method
  private fetchWeatherData(coordinates: { lat: number; lon: number }): Promise<WeatherObject> {
    // Implementation here
    return Promise.resolve({ temperature: 20, humidity: 50, windSpeed: 10 }); // Replace with actual implementation
  }
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
    function dayjs(): any {
      throw new Error("Function not implemented.");
    }

    function buildForecastArray(weatherData: any, arg1: any) {
      throw new Error("Function not implemented.");
    }

    function getWeatherForCity(city: any, string: any) {
      throw new Error("Function not implemented.");
    }
  
