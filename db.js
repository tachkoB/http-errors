import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

export const User = mongoose.model('user', UserSchema)


// Comment this line if you wish to preserve the database documents
mongoose.connection.dropDatabase();


mongoose.connect('mongodb://localhost/httpErrors')

mongoose.connection.once('open', () => console.log('DB connected')).on('error', (error) => { console.log('DB Connection error:', error) })
