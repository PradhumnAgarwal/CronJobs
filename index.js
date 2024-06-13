
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import codeSpear from './jobs/codeSpear.js';
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})



codeSpear();
app.listen(port, () => {
  console.log(`Cron app listening on port ${port}`)
})