const Contact = require('../models/contact')

module.exports.list=(req,res) =>{
    Contact.find({userId:req.user._id}).populate('category')
    .then((contacts) =>{
        res.json(contacts)
    })
}

module.exports.show=(req,res) =>{
    const id=req.params.id
    Contact.findOne({
        _id:id,
        userId:req.user._id
    })
    .then(contact =>{
        if(contact){
            res.json(contact)
        }else{
            res.json({})
        }
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.create=(req,res) =>{
    const data=req.body
    const contact=new Contact({name:data.name,email:data.email,mobile:data.mobile,website:data.website})
    contact.userId=req.user._id
    contact.save()
    .then((contact) =>{
        res.json(contact)
     })
     .catch((err) =>{
         res.json(err)
     })
}

module.exports.update=(req,res) =>{
    const id=req.params.id
    const body=req.body
    Contact.findOneAndUpdate({
        _id:id,
        userId:req.user._id},
         {$set:body}, {new:true})
     .then((contacts) =>{
         if(contacts){
             res.json(contacts)
         }else{
             res.json({})
         }
     })
     .catch((err) =>{
         res.json(err)
     })
}

module.exports.destroy=(req,res) => {
    const id=req.params.id
    Contact.findOneAndDelete({
        _id:id,
        userId:req.user._id})
          .then((contact) =>{
              if(contact){
                  res.json(contact)
              }else{
                  res.json({})
              }
          })
          .catch((err) =>{
              res.json(err)
          })
}


