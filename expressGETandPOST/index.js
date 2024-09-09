const express=require('express');
const app=express();
const path=require('path');
const port=process.env.port || 3001;
app.use(express.static('public'))
// app.get('/',(req,res)=>{
//     // res.sendFile(path.join(__dirname+'/views/','index.html'))
// })
app.get('/process_get', function (req, res) {  
    response = {  
           first_name:req.query.first_name,  
           last_name:req.query.last_name  
       };  
       console.log(response);  
       res.end(JSON.stringify(response));  
    })  
app.listen(port,()=>console.log(`listening on ${port}`))