const mongoose=require('mongoose')

mongoose.Promise=global.Promise

//mongodb+srv://mohan:Mohan1720@cluster0-5szym.mongodb.net/test?retryWrites=true&w=majority
//process.env.MONGOLAB_URI
mongoose.connect( process.env.MONGOLAB_URI||'mongodb://localhost:27017/contact-app', {userNewUrlParser:true})
        .then(() =>{
            console.log('connected to db')
        })
        .catch((err) => {
            console.log('listening on port', port)
        })

module.exports = mongoose