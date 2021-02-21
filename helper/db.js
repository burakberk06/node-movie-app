const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.connection.on("open",()=>{console.log("MongoDB: Connected.")});
mongoose.connection.on("error",()=>{console.log("MongoDB: connected failed")});
