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

import fs from 'fs/promises';

// TODO: Complete the HistoryService class
class HistoryService {
  private async read() {
    return await fs.readFile('searchHistory.json', {
      flag: 'a+',
      encoding: 'utf8',
    });
  }

  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    return await fs.writeFile('searchHistory.json', JSON.stringify(cities, null, '\t'));
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
