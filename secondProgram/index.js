const express=require('express')
const app=express();
const port=process.env.port || 3001
app.get('/',(req,res)=>{
    res.send('welcome')
})
app.get('/users',(req,res)=>{
    const users={name:'salih',age:21}
    res.json(users)
})

app.listen(port,()=>console.log(`listening on port ${port}`))