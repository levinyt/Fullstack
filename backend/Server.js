const express=require('express')
const app=express()

const cors=require('cors')
app.use(cors())
const {MongoClient}=require('mongodb')
const client=new MongoClient('mongodb://localhost:27017')


const bodyparser=require('body-parser')
app.use(bodyparser.json())

app.use(express.urlencoded({extended:true}))

app.listen(5000,()=>{
    console.log('server is running at port 5000')
    
    
})

app.post('/',async(req,res)=>{
    console.log(req.body.name)
    console.log(req.body.desc)

    const result=await client.db('todo').collection('todolist').insertOne({'name':req.body.name,'desc':req.body.desc})
    console.log(result)
})
app.get('/',async(req,res)=>{
    const result=await client.db('todo').collection('todolist').find().toArray()
    console.log(result)
    if(result.length>0){
        res.json(result)
    }
    else{
        console.log('failed');
        
    }
})
    




