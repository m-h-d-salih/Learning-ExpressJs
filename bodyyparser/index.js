const express=require('express');
const app=express();
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.send('helllo world')
})
app.post('/submit',(req,res)=>{
    console.log(req.body)
    res.send('data recieved')
})
app.listen(3001)