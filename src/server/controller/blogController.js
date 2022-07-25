const blogModel = require('../model/blogModel')

const isValid = function(value){
    if(typeof value == 'undefined' || value==null) return false
    if(typeof value =='string' && value.trim().length == 0) return false
    return true
}

const creatBlog = async function(req,res){
    try{
        const {title,imageUrl,description}= req.body
        console.log(req.body)
        if(!isValid(title)) return res.status(400).send({status:false,msg:"required title"})
        if(!(title.length>2 && title.length<12))return res.status(400).send({status:false,msg:"length should be 3 to 11"})
        if(!isValid(imageUrl)) return res.status(400).send({status:false,msg:"required imageUrl"})

        if(!isValid(description)) return res.status(400).send({status:false,msg:"required description"})
        if(!(description.length>9 && description.length<=100)) return res.status(400).send({status:false,msg:"length should be 10 to 100"})

        const result ={
            title:title,
            imageUrl:imageUrl,
            description:description
        }
        const blogCreate = await blogModel.create(result)
        console.log(blogCreate)
        return res.status(201).send({status:true,data:blogCreate});
        
    



    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
}

const getBlog = async function (req,res){
    try{
        const blogData = await blogModel.find({isDeleted:false})
        return res.status(200).send({status:true,data:blogData})

    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
}
const updateBlog = async function(req,res){
    try{
        const id = req.params
        const {title,imageUrl,description}=req.body
        if(!isValid(title)) return res.status(400).send({status:false,msg:"required title"})
        if(!(title.length>2 && title.length<12))return res.status(400).send({status:false,msg:"length should be 3 to 11"})
        if(!isValid(imageUrl)) return res.status(400).send({status:false,msg:"required imageUrl"})

        if(!isValid(description)) return res.status(400).send({status:false,msg:"required description"})
        if(!(title.length>9 && title.length<100))return res.status(400).send({status:false,msg:"length should be 10 to 100"})

       
        const updateBlog = await blogModel.findOneAndUpdate({_id:id},req.body,{new:true})
        return res.status(200).send({status:true,data:updateBlog})



    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
}
const deleteBlog = async function (req,res){
    try{
        const id = req.params
        const blogData = await blogModel.findOneAndUpdate({_id:id,isDeleted:false},{isDeleted:true},{new:true})
        return res.status(200).send({status:true,data:blogData})

    }
    catch(err){
        return res.status(500).send({status:false,msg:err})
    }
}

module.exports = {
   creatBlog,
   getBlog,
   updateBlog,
   deleteBlog
}