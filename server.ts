import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { SWISS_CHOCOLATES } from './src/data/chocolates.ts';
import { SWISS_REGIONS } from './src/data/regions.ts';
import { JOURNAL_ARTICLES } from './src/data/journal.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API: Cellar Chocolates
app.get('/api/chocolates', (_req, res) => {
  res.json(SWISS_CHOCOLATES);
});

// API: Swiss Regions
app.get('/api/regions', (_req, res) => {
  res.json(SWISS_REGIONS);
});

// API: Journal Articles
app.get('/api/journal', (_req, res) => {
  res.json(JOURNAL_ARTICLES);
});

// Vite Middleware for development
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Swiss Chocolate Cellar server running on http://localhost:${PORT}`);
  });
}

startServer();
