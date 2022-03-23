import express from 'express'
import bodyParser from 'body-parser'
import createError from 'http-errors'

// Routes
import UserRouter from './router.js'

// Constants
const PORT = 3000

const app = express()

/**
 * Create a middleware that checks for user key on the req.headers
 * If the user key is missing, send the correct status code.
 */
app.use((req, res, next) => {
    if (!req.headers.user) {
        next(createError(401, 'Not logged in'))
    }
    next()
})

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))


/**
 * Routes
 */
app.use('/', UserRouter)

/**
 * Middleware for handling any missing resources
 * If there is a missing resource, it will create an error and pass it to the
 * error handling middleware
 */
app.use((req, res, next) => {
    const error = createError(404, 'Resource not found today')
    next(error)
})

/**
 * Middle ware for handling errros. Anytime we call next in a catch block, 
 * this middleware will handle sending of the status and the message.
 */
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'Not working')
})

app.listen(PORT, () => console.log(`Port listening on: ${PORT}`))


