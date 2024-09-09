const express=require('express')
const app=express()
const port=process.env.port || 3001
app.get('/',(req,res)=>{
    res.send('html');  
})
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    // req.params=
    // 	An object containing properties mapped to the named route ?parameters?.
    //      For example, if you have the route /user/:name, then the "name" property is available as req.params.name. 
    //      This object defaults to {}.
    res.send(`this is ur id ${id}`);
})
app.get('*',(req,res)=>{
    // res.status(404)
    // res.send('<h1>404</h1>');  or we can chain both
    res.status(404).send('<h1>404</h1>');

})
//how to send a file


app.listen(port,()=>console.log(`listending ${port}`))