const Blog=require('../model/model');

//find all blogs
exports.getall=async(req,res)=>{
    /*
    Blog.find()
    .then((data)=>{
        res.status(200).json(data)
    }).catch((err)=>{
        if(err)
        {
            res.status(500).json(err)
        }
    })
    */
   let data;
   try{
       data=await Blog.find();
   }
   catch(error){
        if(error) return res.status(500).json(error);
   }
   res.status(200).json(data);
}

//find one blog by id
exports.getone=async(req,res)=>{
    /*
Blog.findById(req.params.blogID)
    .then((data)=>{
        if(!data)
        {
            return res.status(404).json({"msg":"Blog not found"})
        }
        return res.status(202).json({"doc":data})
    })
    .catch((err)=>{
        if(err)
        {
         res.status(500).json(err)
        }
    })
    */
   let data;
   try{
       data=await Blog.findById(req.params.blogID)
   }
   catch(err)
   {
       if(err) return res.status(500).json(err)
   }
   if(!data)
   {
    return res.status(404).json({"msg":"Blog not found"})
   }
   return res.status(202).json({"doc":data})
}

exports.getbytitle=async(req,res)=>{
    let data;
    //console.log(req.body)
    try{
        data=await Blog.find({title:req.body.title})
    }
    catch(err)
    {
        if(err) return res.status(500).json(err)
    }
    if(!data)
   {
    return res.status(404).json({"msg":"Blog not found"})
   }
   return res.status(202).json({"doc":data})
}

exports.getbyauthor=async(req,res)=>{
    let data;
    //console.log(req.body)
    try{
        data=await Blog.find({author:req.body.author})
    }
    catch(err)
    {
        if(err) return res.status(500).json(err)
    }
    if(!data)
   {
    return res.status(404).json({"msg":"Blog not found"})
   }
   return res.status(202).json({"doc":data})
}

exports.getbydesc=async(req,res)=>{
    let data;
    //console.log(req.body)
    try{
        data=await Blog.find({desc:req.body.desc})
    }
    catch(err)
    {
        if(err) return res.status(500).json(err)
    }
    if(!data)
   {
    return res.status(404).json({"msg":"Blog not found"})
   }
   return res.status(202).json({"doc":data})
}
// create a new blog
exports.create=async(req,res)=>{
    const newblog=new Blog({
        title:req.body.title,
        author:req.body.author,
        desc:req.body.desc
    });
    let blog;
    try{
        blog=await newblog.save()
    }
    catch(err){
        if(err) return res.status(500).json(err);
    }
    return res.status(201).json({"msg":"created","blog":blog});
}


//to update one blog by id
exports.updateone=async(req,res)=>{
    
    if(!req.body.title||!req.body.desc||!req.body.author)
        return res.status(500).json({"msg":"fill all fields"})
        /*
    Blog.findByIdAndUpdate(req.params.blogID,{
        title:req.body.title,
        author:req.body.author,
        desc:req.body.desc
    },{new:true})

    .then((data)=>{
        if(!data) return res.status(404).json({"msg":"not found"})
        res.status(202).json({
            "msg":"updated",
            "doc":data
        })
    })
    .catch((err)=>{
        if(err)
         res.status(500).json(err)
    })
    */
   let data;
   try{
    data=await Blog.findByIdAndUpdate(req.params.blogID,{
        title:req.body.title,
        author:req.body.author,
        desc:req.body.desc
    },{new:true})
   }
   catch(err){
       if(err) return res.status(500).json(err)
   }
   if(!data)
   {
       return res.status(404).json({"msg":"Blog not found"})
   }
   return res.status(202).json({"msg":"blog updated","doc":data})
}

// delete one api by id
exports.deleteone=async(req,res)=>{
    /*
    Blog.findByIdAndDelete(req.params.blogID)
    .then((data)=>{
        if(!data) res.status(404).json({"msg":"data not found"})
        
        res.status(202).json({
            "msg":"deleted",
            "doc":data
        })
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
    */
    let data;
    try{
        data=await Blog.findByIdAndDelete(req.params.blogID)
    }
    catch(err)
    {
        if(err) return res.status(500).json(err)
    }
    if(!data)
    {
        return res.status(404).json({"msg":"blog not found"})
    }
    return res.status(202).json({"msg":"Blog deleted","data":data})
}