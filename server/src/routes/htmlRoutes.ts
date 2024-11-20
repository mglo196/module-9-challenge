import { Request, Response } from 'express';
const path = require('path');
const { fileURLToPath } = require('url');
const { Router } = require('express');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

// Define route to serve index.html
router.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


// TODO: Define route to serve index.html

router.get('/index.html', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

export default router;
