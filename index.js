const express = require('express');
const app=express();
const cors = require('cors');
const mongoose=require("mongoose");
const authRoutes=require("./routes/auth")

//middleware
app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500',  // Frontend origin
    credentials: true  // Optional, if you're using credentials like cookies
}));
const PORT=3000;
// const PORT = process.env.PORT || 3000;


require("dotenv").config();
const db=process.env.DBURI;

mongoose.connect(db)
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// })
    .then(()=>{
        console.log("Connected to mongodb");
        app.listen(PORT,()=>{
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }).catch((err)=>{
        console.log("Failed to connect to mongodb",err);
        
    })

    app.use(authRoutes)
