import userRoutes from './user'
import customerRoutes from './customer'
module.exports = (app) => {
  userRoutes(app)
  customerRoutes(app)
  // After your routes add a standard express error handler. This will be passed the Joi
  // error, plus an extra "type" field so we can tell what type of validation failed
  // //error handler
  app.use((err, req, res, next) => {
    if (err.isBoom) {
      return res.status(err.output.statusCode).json({ error: "validation", success: false, data: err.data });
    }
  });
}



