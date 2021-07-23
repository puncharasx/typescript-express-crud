import  mongoose  from 'mongoose'

import app from './app'

const PORT = process.env.PORT || 5000

mongoose.connect(
    'mongodb+srv://puncharasx:puncharasx@cluster0.a69yw.mongodb.net/puncharas?retryWrites=true&w=majority',
     {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
     .then(result => {
        app.listen(PORT,():void => {
            console.log(`Running on Port: ${PORT} 🌍`)
        })
     }).catch(err => { console.log('Connectd fail please check connect database. ⛔') });

//Start app
