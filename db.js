import mongoose from 'mongoose'


// Comment this line if you wish to preserve the database documents
mongoose.connection.dropDatabase();



mongoose.connect('mongodb://localhost/httpErrors')

mongoose.connection.once('open', () => console.log('DB connected')).on('error', (error) => { console.log('DB Connection error:', error) })
