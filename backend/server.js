const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Helper function to read data
const getVillas = () => {
  const data = fs.readFileSync(path.join(__dirname, 'data', 'villas.json'));
  return JSON.parse(data);
};

// Routes
// 1. Get all villas
app.get('/api/villas', (req, res) => {
  try {
    const villas = getVillas();
    res.json(villas);
  } catch (error) {
    res.status(500).json({ message: "Error fetching villas" });
  }
});

// 2. Get villa by ID
app.get('/api/villas/:id', (req, res) => {
  try {
    const villas = getVillas();
    const villa = villas.find(v => v.id === parseInt(req.params.id));
    if (!villa) return res.status(404).json({ message: "Villa not found" });
    res.json(villa);
  } catch (error) {
    res.status(500).json({ message: "Error fetching villa details" });
  }
});

// 3. Contact Form Submission
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log('Contact Form Submission:', { name, email, subject, message });
  // Here you would typically send an email or save to a DB
  res.status(200).json({ message: "Contact message received successfully!" });
});

// 4. Booking Form Submission
app.post('/api/bookings', (req, res) => {
  const bookingData = req.body;
  console.log('Booking Request:', bookingData);
  res.status(200).json({ message: "Booking request received! We will contact you shortly." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
