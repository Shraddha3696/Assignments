
const express=require('express');
const server=express();
const port=3000;//middleware json() urlencoding
server.use(express.json());
server.use(express.urlencoded({extended:true}));
// Http Methods
 server.get('/get',(req,res)=>{ 
       res.send("GET Method ");
});
server.post('/post',(req,res)=>{  
      res.send("POST Method  ");
});
server.put('/put',(req,res)=>{
        res.send("PUT Method ");
});
server.delete('/delete',(req,res)=>{
        res.send("DELETE Method ");
})
server.listen(port,()=>{ 
       console.log(`http://localhost:${port} server listening`)
})
