var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randomNumber=Math.floor(Math.random()*100)+1
    let data=req.query.x
    console.log(data)
    res.render('computation',{
        r:`square root applied to ${randomNumber} is ${Math.cos(randomNumber)}`,
        q:`square root applied to ${data} is ${Math.cos(data)}`
    })
})

module.exports=router