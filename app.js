import express from 'express'
import bodyParser from 'body-parser'

// Routes
import UserRouter from './router.js'

// Constants
const PORT = 3000

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))


app.use('/', UserRouter)


app.listen(PORT, () => console.log(`Port listening on: ${PORT}`))


