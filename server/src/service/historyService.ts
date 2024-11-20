// TODO: Define a City class with name and id properties

class City {
  name: string;
  id: string;
  latitude: number;
  longitude: number;

  constructor(name: string, id: string, latitude: number, longitude: number) {
    this.name = name;
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

// Importing specific functions from fs/promises
import { readFile, writeFile } from 'fs/promises';
const path = require('path'); 

// Example function to save a city to a JSON file
async function saveCity(city: City) {
  try {
    const filePath = path.join(__dirname, 'cities.json');
    const data = await readFile(filePath, 'utf-8');
    const cities = JSON.parse(data || '[]'); // Parse existing data or initialize an empty array
    cities.push(city); // Add the new city
    await writeFile(filePath, JSON.stringify(cities, null, 2)); // Write updated data back to the file
    console.log('City saved successfully.');
  } catch (error) {
    console.error('Error saving city:', error);
  }
}


// TODO: Complete the HistoryService class
class HistoryService {
  private filePath: string;

  constructor() {
    // Set the file path for searchHistory.json
    this.filePath = path.join(__dirname, 'searchHistory.json');
  }

  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]): Promise<void> {
    try {
      await writeFile(this.filePath, JSON.stringify(cities, null, '\t'));
      console.log('Search history updated successfully.');
    } catch (error) {
      console.error('Error writing to search history:', error);
    }
  }

  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    return await this.read().then((cities) => {
      let parsedCities: City[];

      try {
        parsedCities = [].concat(JSON.parse(cities));
      } catch (err) {
        parsedCities = [];
      }

      return parsedCities;
    });
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  private async fetchLocationData(city: string) {
    return { name: city, id: 'some-id' };
  }
  
  async addCity(city: City) {
    const locationData = await this.fetchLocationData(city.name); 
    const newCity = new City(locationData.name, locationData.id, 0, 0); 
    const cities = await this.getCities(); // Get existing cities
    cities.push(newCity); // Add new city to the array
    await this.write(cities); // Write updated cities to file
  }

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {
    const cities = await this.getCities();
    const updatedCities = cities.filter((city) => city.id!== id);
    await this.write(updatedCities);   // return JSON.stringify(cities) as City{};
  }

export default new HistoryService();
