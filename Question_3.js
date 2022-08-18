const express = require('express');
const app = express();

app.listen(3000);

app.get('/home', (req, res)=>{
  res.send("Hello, world!");
})