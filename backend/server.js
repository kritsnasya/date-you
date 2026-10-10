import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { rateLimit } from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Security and middleware
app.use(cors());
app.use(express.json());

// Rate limiting: 10 requests per hour per IP for the respond endpoint
const submitLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: { error: 'Too many requests, please try again later.' }
});

let db;

async function initDB() {
  db = await open({
    filename: path.join(__dirname, 'database.sqlite'),
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      answered_yes BOOLEAN,
      no_attempts INTEGER,
      name TEXT,
      date_choice DATE,
      time_choice TEXT,
      date_type TEXT,
      food_notes TEXT,
      contact TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

// POST endpoint to save response
app.post('/api/respond', submitLimiter, async (req, res) => {
  try {
    const {
      name, dateChoice, timeChoice, dateType, foodNotes, contact, message, noAttempts
    } = req.body;

    // Validate required fields
    if (!name || !dateChoice || !timeChoice || !dateType || !contact) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await db.run(
      `INSERT INTO responses (
        answered_yes, no_attempts, name, date_choice, time_choice, 
        date_type, food_notes, contact, message
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        true, // always true if they reached this form
        noAttempts || 0,
        name,
        dateChoice,
        timeChoice,
        dateType,
        foodNotes || '',
        contact,
        message || ''
      ]
    );

    // Optional: Send email notification here using Resend or SendGrid
    // console.log(\`New date submission from \${name}! Email notification can be integrated here.\`);

    res.status(201).json({ success: true, id: result.lastID });
  } catch (error) {
    console.error('Error saving response:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET endpoint for admin (password protected)
app.get('/api/responses', async (req, res) => {
  const adminPassword = req.headers['x-admin-password'];
  const expectedPassword = process.env.ADMIN_PASSWORD || 'secret123';

  if (adminPassword !== expectedPassword) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const responses = await db.all('SELECT * FROM responses ORDER BY created_at DESC');
    res.json(responses);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

initDB().then(() => {
  app.listen(port, () => {
    console.log(\`Backend running on http://localhost:\${port}\`);
  });
});
