const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', service: 'Jagruti and Associates API' });
});

// Mock services endpoint
app.get('/api/services', (req, res) => {
  const services = [
    'Auditing', 'Income Tax Returns', 'TDS Returns', 'GST Registration and Filings',
    'MCA Filings', 'Labour License', 'Trade License', 'Accounting and HR Services',
    'PT', 'PF', 'ESI', 'Loan Processing'
  ];
  res.json(services);
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('--- New Inquiry Received ---');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Here we would typically use Nodemailer to send an email
  // or Mongoose to save to MongoDB.

  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
