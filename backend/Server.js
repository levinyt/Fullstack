const express=require('express')
const app=express()

const cors=require('cors')
app.use(cors())

const bodyparser=require('body-parser')
app.use(bodyparser.json())

app.use(express.urlencoded({extended:true}))

app.listen(5000,()=>{
    console.log('server is running at port 5000')
    
    
})

app.post('/',(req,res)=>{
    console.log(req.body.name)
    console.log(req.body.desc)
})



