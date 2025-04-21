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



app.get('/sitemap.xml', (req, res) => {
  try {
    // Set the content type to XML
    res.header('Content-Type', 'application/xml');
    
    // Generate your sitemap XML content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://the-reading-capsule-backend.onrender.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://the-reading-capsule-backend.onrender.com/fitgirls.html</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://the-reading-capsule-backend.onrender.com/metabolism.html</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://the-reading-capsule-backend.onrender.com/burns_fat.html</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://the-reading-capsule-backend.onrender.com/home_workout.html</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://the-reading-capsule-backend.onrender.com/no_cardio.html</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://the-reading-capsule-backend.onrender.com/fitness.html</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://the-reading-capsule-backend.onrender.com/abs.html</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://the-reading-capsule-backend.onrender.com/index.html</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://the-reading-capsule-backend.onrender.com/Out_of_Shape.html</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
    
    res.send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



