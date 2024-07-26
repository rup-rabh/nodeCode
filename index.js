const express = require('express')
const app = express();

const bodyParser = require('body-parser');
bodyParser.urlencoded({extended:true});

let content = []

app.post("/create" , (req,res)=>{
    const newElement = req.body.obj;
    content[newElement.id] = newElement;
    res.send();
})

app.put("/update" , (req,res)=>{
    const id = req.body.obj.id;
    content[id] = req.body.obj;
    res.end();
})

app.get("/List", (req,res)=>{
    res.send(JSON.stringify(content));
    res.end();
})

app.delete("./List" , (req,res)=>{
    const id = req.id;
    content[id] = null;
    res.end();
})

app.listen(3000,()=>{
    console.log("Working...");
})