const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const validator = require('validator');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Validate Mongo URI
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in environment variables");
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// Define schemas
const EmailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});
const Email = mongoose.model('Email', EmailSchema);

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  sentAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model('Contact', ContactSchema);

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.send('🚀 The Reading Capsule backend is running!');
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    const exists = await Email.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    await Email.create({ email });
    res.status(200).json({ message: 'Thanks for subscribing!' });
  } catch (err) {
    console.error('❌ Subscribe error:', err);
    res.status(500).json({ message: 'Something went wrong. Try again later.' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    await Contact.create({ name, email, message });
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('❌ Contact error:', err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

app.get('/sitemap(1).xml', async (req, res) => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.7 },
    // Add more pages
  ];

  const stream = new SitemapStream({ hostname: 'https://the-reading-capsule-backend.onrender.com' });
  res.header('Content-Type', 'application/xml');

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  res.send(xml);
});

