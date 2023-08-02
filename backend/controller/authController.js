const signup=(req,res)=>{

    const {name,email,password,confirmPassword}= req.body;
    console.log(name,email,password,confirmPassword);
  return  res.status(200).json({
        success:true,
        data:{}
    });

}

module.exports={signup}