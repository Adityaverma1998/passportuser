const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('./db')

passport.serializeUser(function (student, done) {
    console.log(student[0].email_id)

    done(null,student[0].email_id)
})

passport.deserializeUser(function (email_id, done) {
   db.checkuser(email_id)
            .then((student)=>{
            if(!student){
                return done(null, false, {message: "No such user"})
            }
               return done(null,student)
            })
            .catch((err)=>{
                return done({message:'Unauthorized User'})             
    })  
})

passport.use(new LocalStrategy(function (email_id, password, done) {
           db.checkuser(email_id)
        .then((student)=>{
        if(!student){
            return done(null, false, {message: "No such user"})

            }
             if(student[0].password !==password){
                return done(null, false, {message: "No such password"})

            }
        return done(null,student)
        })
        .catch((err)=>{
            return done({message:'Unauthorized User'})               
})

}))

exports = module.exports = passport 
 