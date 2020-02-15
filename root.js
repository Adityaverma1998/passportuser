const route = require('express').Router()

const db = require('../db')
const passport = require('../passport')
route.post('/signup',(req,res)=>{
db.insertdata(req.body.user_name,req.body.email_id,req.body.password)
.then(()=>{
    res.redirect('/login')
})
.catch((err)=>{
    res.send("already registered email")
    //console.log(err)
})
})

route.post('/login',(req,res)=>{

        db.checkuser(req.body.email_id)
        .then((student)=>{
        if(!student){
            return res.send("please enter valid username or email_id")
            }
             if(student[0].password !==req.body.password){
                return res.send("Wrong password")
            }
            res.status(200)
        return res.send('WELCOME:    ' +student[0].user_name)
        })
        .catch((err)=>{
            res.send('Unauthorized User')             
})  
})
// route.post('/login',(req,res)=>{
// })
//  route.post('/login', passport.authenticate('local', {
//     successRedirect: '/private',
//      failureRedirect: '/login'
// }));
    exports = module.exports={
        route
    }