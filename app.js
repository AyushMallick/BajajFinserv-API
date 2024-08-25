const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

// Set security HTTP headers
app.use(helmet());

// Body parser, reading data from body into req.body
app.use(express.json());

// Data Sanitaztion against nosql injections
app.use(mongoSanitize());

// Data Sanitaztion against XSS (cross site scripting)
app.use(xss());

// ROUTES
app.use('/', userRouter);

module.exports = app;