import express from 'express'
import createError from 'http-errors'

// Model
import { User } from './db.js'


const router = express.Router()

/**
 * Returns the list of all users
 */
router.get('/', async (req, res, next) => {
    const users = await User.find()
    res.send(users)
})


/**
 * Create a user
 */
router.post('/', async (req, res, next) => {
    try {

        if (req.body.name === 'Andrej') {
            throw new Error('Name not allowed')
        }

        const user = new User(req.body)
        await user.save()
        res.send(user)

    } catch (err) {
        next(createError(404, err.message))
    }
})




export default router