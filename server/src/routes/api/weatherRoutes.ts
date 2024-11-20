import { Router } from 'express';
import weatherService from '../../service/weatherService';
const router = Router();

// import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';
// import [Request, Response] from 'express'; 

// TODO: POST Request with city name to retrieve weather data

router.post('/', (req: Request, res: Response) => {
  const city = req.body.cityName;
  if (req.body) {
    const weather = await weatherService.getWeatherForCity(city);
    res.json(weather);
  } else {
    res.send('Error in adding feedback');
  }
  // TODO: save city to search history

  router.post('/history', async (_req, res) => {
    const saveHistory = await HistoryService.addCity(_req.body.cityName);
    res.json(saveHistory);
  });
});

// TODO: GET search history
router.get('/history', async (_req, res) => {
  try {
    const cityHistory = await HistoryService.getCities();

    return res.status(200).json(cityHistory);
  } catch (error) {
    console.error('Error getting city:', error);
    return res.status(500).json({ message: 'Error getting city', error });
  }
});

// * BONUS TODO: DELETE city from search history

router.delete('/history/:id', async (req, res) => { //(req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      res.status(400).json({ message: 'City ID is required' });
      return;
    }
    await HistoryService.removeCity(req.params.id);
    res.json({ message: 'City deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
