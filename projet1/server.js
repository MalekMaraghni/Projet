/*const express = require('express');

const path=require('path');
const app=express();
//getting our posts routes
const posts=require('./server/routes/posts');
//using middleware
app.use(express.static(path.join(__dirname,'dist')));
app.use('/posts',posts);
// catch all other routes request and return it to the index
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'))
})
;
const port = process.env.port ||4200 ;
app.listen(4200,(req,res) => {
    console.log('RUNNING ');
});*/



//connection BD
function dbConnection() {
    var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'taches_dev',
  });
  
  con.connect();
return con 
}

 /* insertUser();
  function insertUser(){
      var db=dbConnection();

      var username="malek";
      var password="abc";

      let crypto=require('crypto')
      const hash=crypto.createHmac('sha256',password).update('gchgchchchchhcchc').digest('hex');
      var data=[username,hash] ;

      db.query('INSERT INTO admin SET mail_admin =? , motdepasse_admin=?', data,(err,login,filed)=>{
          if(err)throw err
      })

  }*/

  getUser();
  function getUser() {
      var db=dbConnection();
      var data=['malek'];
      
      db.query('SELECT * FROM taches_dev WHERE mail_admin=? ',data,(err,login,filed)=>{
          if(err)throwError;
          console.log(taches_dev);
      }) };

    //getValidate();
    /*function Validate() { 
        var msg; 
        var str = document.getElementById("password").value; 
        if (str.match( /[0-9]/g) && 
                str.match( /[A-Z]/g) && 
                str.match(/[a-z]/g) && 
                str.match( /[^a-zA-Z\d]/g) &&
                str.length >= 10) 
            msg = "<p style='color:green'>Mot de passe fort.</p>"; 
        else 
            msg = "<p style='color:red'>Mot de passe faible.</p>"; 
        document.getElementById("password").innerHTML= msg; 
    } */

      
  
