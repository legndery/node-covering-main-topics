const express = require('express');
const bodyParser = require('body-parser');
const consleMid = require('./middleware/console-middleware');
const app = express();
const PORT  = 8080;
//middlewares///
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use(consleMid);
//////////
//IMPORT DB/////
const db = require('./db');
///IMPORT MODELS///////////
const BlogPost = require('./models/blog-post');
//////////////////

//GET / = get all
//GET /<ID> = get particular id
//POST / = create post
//PATCH /<ID> = edit particular post
//DELETE /<ID>  = delete particular id

app.get('/', (req,res)=>{
    res.json(db);
})
app.get('/:id', (req,res)=>{
    const id = req.params.id;
    res.json(db[id]);
})
app.post('/', consleMid, (req,res)=>{
    const {title, content} = req.body;
    const b = new BlogPost(title, content);
    db[b._id] = b;
    res.json({
        sucess:true,
        msg:"Successfully Created"
    })
})

app.post('/', )




app.listen(PORT, ()=>{
    console.log(`Server Started on http://127.0.0.1:${PORT}`)
})

