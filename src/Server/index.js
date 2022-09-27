const express=require('express');


const app=express();

app.use(express.json());





app.get('/',(req,res)=>{
    res.send('Demo Working');
})

app.listen(8080,()=> console.log('server is running at port 8080'));