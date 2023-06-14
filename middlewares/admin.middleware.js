const isAdmin = async(req,res,next)=>{
  if(req.user?.username === "admin"){
    next()
  }else{
    res.status(400).json({error:"Unauthorized access."})
  }
}

module.exports = isAdmin