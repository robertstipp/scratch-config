const path = require('path');
const express = require('express');

const passport = require('passport');
const session = require('express-session');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// Session Configuration

// Passport Initialization

// Passport Configuration

// Routes
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../public/index.html')))

app.use('/fonts', express.static(path.join(__dirname, '../public/fonts')));
app.use('/images', express.static(path.join(__dirname, '../public/images')));
// Base Route

// Auth Routes

// Global Error Handler

module.exports = app