import dotenv from 'dotenv';
import express, { Request, Response } from 'express'; // Ensure Request and Response are imported
import path from 'path'; // Import the path module
dotenv.config();

// Import the routes
import routes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3001;

// Serve static files from the client dist folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../client/dist'));

app.use(routes);

// Wildcard route to serve index.html for any unmatched routes
app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// POST route to handle incoming data
app.post('/data', (req, res) => {
    console.log('JSON data:', req.body);
    res.json(req.body);
});

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));