const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

app.listen(3000,()=>{
    console.log("server works at port 3000")
})

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    res.json({url:URL});
})