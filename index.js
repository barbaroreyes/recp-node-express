const express = require('express');
const shortid = require('shortid')
const app = express();
const PORT = 5000;
app.use(express.json())


const channels = [];
const lessons = [];

app.get('/',(req,res)=> {
   res.json({data : 'Hello'})
})

app.post('/api/lessons',(req,res) => {
  const lessonsInfo = req.body;
  lessonsInfo.id = shortid.generate();
  lessons.push(lessonsInfo);
  res.status(201).json({lessonsInfo})
})
app.get('/api/lessons',(req,res)=>{
    res.status(201).json(lessons)
})
app.post('/api/channels' ,(req,res) => {
   const channelInfo = req.body;
   channelInfo.id = shortid.generate();
   channels.push(channelInfo)
   res.status(201).json({channelInfo})
})
app.get('/api/channels',(req,res)=>{
    res.status(201).json({channels});
})

app.delete('/api/channels/:id',(req,res) => {
    const {id} = req.params;
    const  deleted = channels.find(channel => channel.id === id);
    res.status(200).json(deleted)
    if(deleted){
        channels = channels.filter(channel => channel.id !== id)
    }else{
        res
        .status(404)
        .json({message : "Channel you are looking for does not exit"})
    }
    
});

app.listen(PORT,() => console.log(`Running on Port ${PORT}`))