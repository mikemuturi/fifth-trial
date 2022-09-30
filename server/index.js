const express = require('express');
const bodyParser = require('body-parser');
const app =express()
const mysql = require('mysql')
const cors =require ('cors')

const db  = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: 'Password',
        database: 'cruddatabase',

    }
);
 app.use(cors());
 app.use(express.json());   
app.use(bodyParser.urlencoded({
extended: true
}));

// app.get('/' ,(req,res) => {


//     const sqlInsert = "INSERT INTO student_detail(registration_number,recommendation) VALUES ('N11/3/0523/018','GoodStudent'); "
//     db.query(sqlInsert,(err,result) =>{
//         res.send("Hello friend how are doing");
//     });
    
// });
 
 app.get('/api/get',(req,res)=>{
    const sqlSelect = 
   " SELECT * FROM student_detail";
   db.query(sqlSelect,[registrationNumber,recommendation],(err,result)=>{
    console.log(result);
   });
 });
app.post("/api/insert",(req,res) =>{

const registrationNumber= req.body.registrationNumber
const recommendation    = req.body.recommendation

const sqlInsert = "INSERT INTO student_detail(registrationNumber,recommendation) VALUES(?,?)"
db.query(sqlInsert,[registrationNumber,recommendation],(err,result)=>{
console.log(result);
});
});


app.listen(3002,()=>{
    console.log("running on port 3002");
});

 