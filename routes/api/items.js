const express = require('express')
const router = express.Router()

//item model

const Item = require('../../models/Item');


//route get
router.get('/',(req,res) => {
    Item.find()
    
    .then((items) => res.json(items))
})
//route post
router.post('/',(req,res) => {
    const newItem = new Item({
        name : req.body.name
    })
    
    newItem.save().then(item => res.json(item))
})
//delete route
router.delete('/:id',(req,res) => {
Item.findById(req.params.id)
    .then(item => item.remove().then(() => {
        res.json({success: true})
    }))
    .catch(err => res.status(404).json({sucess: false}))
})

module.exports = router;