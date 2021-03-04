const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req,res)=>{
    res.json({Hello : 'World'})
});


app.get('/hello',(req,res)=>{
  res.json({hello : "Future sinior softwere developer"})
})


app.listen(PORT,() => console.log(`Running on Port ${PORT}`))