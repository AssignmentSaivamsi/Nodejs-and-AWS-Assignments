const express = require('express');

const app = express();

app.listen(3000);

app.get('/year/:age', (req, res)=>{
    const Age = req.params.age;
    const result = 2022 - Age;
    res.send("Your year of birth is "+ result);
})