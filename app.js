import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import fs from 'fs'
import morgan from 'morgan';
import routes from './server/routes'

// setting up express server
const app = express()

// parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// env variables config
require("dotenv").config()
// Require our routes into the application.
routes(app)
// default route
app.get('*', (req, res) => {
  console.log(req, 'test')
  res.status(200).send({ message: 'hello there' })
})

// create log file
app.use(morgan('common', {
  stream: fs.createWriteStream('./logger.log', {flags: 'a'})
}));
app.use(morgan('dev'));

// //error handler
app.use(function (err, req, res) {
  if (err.isBoom) {
    return res.status(err.output.statusCode).json({ error: "validation", success: false, err });
  }
});
module.exports = app
