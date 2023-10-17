require('dotenv').config();

const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const morgan = require('morgan');

// const router = require("./routes");
const { AppError } = require('./helpers');

const ENV = process.env;
const PORT = ENV.PORT || 3000;
const API_PREFIX = ENV.API_PREFIX
const NODE_ENV = ENV.NODE_ENV

const app = express();

app.use(morgan("combined"))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.enable('trust proxy');
app.use(compression());
app.use(xss());
app.use(cors());

app.get('/', (req, res) => {
  return res.status(200).json({
    hello: "world"
  })
})

// app.use(API_PREFIX, router)

// 404 Handler
app.all('*', (req, res, next) => {
  return next(
      new AppError(`${req.originalUrl} Not Found`, 404)
  )
})

// Error Handler
app.use((err, req, res, next) => {
    NODE_ENV === "development" ? console.error(err) : ""

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"
    
    res.status(statusCode).json({
      statusCode,
      message,
      ...(process.env.NODE_ENV === "development" ? { ...err } : {})
    });
});

app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
);
