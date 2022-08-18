const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./model.js')
const Inventory = mongoose.model("inventory");

mongoose.connect('mongodb+srv://Vamsi:Vamsi@cluster0.crgdh.mongodb.net/Inventory');
app.use(bodyParser.json());

app.listen(8081, ()=>{
 console.log("now listening to port 3000");
})

app.post('/inventory', (req, res)=>{
      var newInventory ={
        name : req.body.name,
        quantity : req.body.quantity
      }

      var inventory1 = new Inventory(newInventory);

      inventory1.save().then(()=>{
         console.log("Item created in inventory");
      }).catch(err=>{
        if(err){
          throw err;
        }
      })
      res.send("Item created");
});

app.get('/inventory/:name', (req, res)=>{
      Inventory.find(req.body.name).then((Fruit)=>{
        if(Fruit){
          res.json(Fruit);
        }
        else{
          res.send("invalid error");
        }
      }).catch((err)={
        if(err){
          throw err;
        }
      })

})
app.get('/inventory', (req, res)=>{
    Inventory.find().then((response)=>{
      res.json(response);
    }).catch(err=>{
      if(err){
        throw err;
      }
    })
  })

app.delete('/inventory',(req, res)=>{
   Inventory.deleteMany().then(()=>{
     res.send("all items delted");
   }).catch(err=>{
     if(err){
       throw err;
     }
   })
})

app.delete('/inventory/:name', (req, res)=>{
  Inventory.findByIdAndRemove(req.body.name).then((response)=>{
    if(response){
       res.send("Item is removed");
    }
    else{
      res.send("Item is not available to delete");
    }
  }).catch(err=>{
    if(err){
      throw err;
    }
  })
})