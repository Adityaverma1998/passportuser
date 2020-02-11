const mysql = require('mysql2')
const connection  = mysql.createConnection({
    host:'localhost',
    database:'assignment',
    user:'root',
    password:'root',
    flags: '-FOUND_ROWS,IGNORE_SPACE'


})
function insertdata(user_name,email_id,password){
return new Promise((resolve,reject)=>{
    connection.query(`
    INSERT INTO student(user_name,email_id,password) VALUES(?,?,?)`,
    [user_name,email_id,password],
    (err,results)=>{
        if(err){
            reject(err)
        }else{
            resolve(results)
        }
    })
})
}
function checkuser(email_id){
    return new Promise((resolve,reject)=>{
        connection.query(`
        SELECT * FROM student WHERE email_id=?`,
        [email_id],
        (err,results)=>{
          if(err){
           console.log('error')
              reject(err)
              console.log('error')

           
          }else{
            console.log("done")
              resolve(results)
              console.log("done")

             
          }
        }
     ) })
}

exports = module.exports={
    insertdata,
    checkuser
}