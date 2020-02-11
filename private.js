const route = require('express').Router()

route.get('/',(req,res)=>{
    res.send("<h1>HELLO THIS SITE PRIVATE</h1>")
})
exports = module.exports={
    route
}