const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});

//mongoose connection
const DB = process.env.DATABASE_URI;
mongoose.connect(DB, {
    useNewUrlParser: true
})
.then(()=>{
    console.log('Database Connected!');
})

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, ()=>{
    console.log(`Server Running On localhost:${PORT}`);
})