const Category=require('../models/category')

module.exports.list=(req,res) =>{
    Category.find({userId:req.user._id})
    .then((category) =>{
        res.json(category)
    })
}

module.exports.show=(req,res) =>{
    const id=req.params.id
    Category.findOne({
        _id:id,
        userId:req.user._id})
    .then(category =>{
        if(category){
            res.json(category)
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
    const category=new Category(data)
    category.userId=req.user._id
    category.save()
    .then((category) =>{
        res.json(category)
     })
     .catch((err) =>{
         res.json(err)
     })
}

module.exports.update=(req,res) =>{
    const id=req.params.id
    const body=req.body
    Category.findOneAndUpdate({
        _id:id,
        userId:req.user._id}, {$set:body}, {new:true})
     .then((category) =>{
         if(category){
             res.json(category)
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
    Category.findOneAndDelete({
        _id:id,
        userId:req.user._id})
          .then((category) =>{
              if(category){
                  res.json(category)
              }else{
                  res.json({})
              }
          })
          .catch((err) =>{
              res.json(err)
          })
}


