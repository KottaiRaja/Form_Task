const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const fileupload = require('express-fileupload');


const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(fileupload());

var c = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:'root',
    password:'password',
    database:'form'

})

c.connect((err,res)=>{
    if(res){
        console.log('Database Connected');
    }
    else{
        console.log(err);
    }
})

app.post('/register',(request,response)=>{
    let name = request.body.name;
    let email = request.body.email;
    let phone = request.body.num;
    let password = request.body.password;

    let sql = 'insert into register(Username,Name,Email,Phone,Password) values (?,?,?,?,?)';

    c.query(sql,[email,name,email,phone,password],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Inserted"};
            response.send(s);
        }
    })
   
});




app.post('/Login',(request,response)=>{
    let username = request.body.username;
    let password = request.body.password;

    let sql = 'select * from register where Username=?';

    c.query(sql,[username],(error,result)=>{
        if(error){
            let s = {"status":"Error"};
            response.send(s);
        }
        else if(result.length > 0){
            let username1 = result[0].Username;
            let password1 = result[0].Password;
            if(username1 == username && password1 == password){
                let s = {"status":"Success"};
                response.send(s);
            }
            else{
                let s = {"status":"Invalid_Login"};
                response.send(s);
            }
        }
        else{
            let s = {"status":"Invalid_Login"};
            response.send(s);
        }
    })

})



app.listen(3004);