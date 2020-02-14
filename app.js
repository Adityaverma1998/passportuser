const express  = require('express')
const passport = require('./passport')
const app  = express()
const path = require('path')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
 app.use(passport.initialize());
 app.use(passport.session());


app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/public').route)
app.use('/private',require('./routes/private').route)

app.listen(8002,()=>console.log("SERVER RUN ON PORT NO IS 8002"))
