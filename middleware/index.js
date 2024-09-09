const express=require('express');
const app=express();
const port=process.env.port || 3001
// app.use(logger)
app.get('/',(req,res)=>{
    console.log(`home`)
    res.send('hello world');
})
// app.get('/:category',(req,res)=>{
//     // res.send(req.params)
//     res.send(req.params.category)
// })
app.get('/login',logger,(req,res)=>{
    console.log(`login`)
    res.send('login page')
    
})

function logger(req,res,next){
    console.log('log')
    next();
}
app.listen(port,()=>console.log(`listening ${port}`))