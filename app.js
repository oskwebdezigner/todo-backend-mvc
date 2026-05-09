import express from "express"
import mongoose, { mongo } from "mongoose"
import cors from "cors"
import "dotenv/config";
import taskModel from "./Models/TaskModel.js"
import dbConnection from "./database/database.js"
import router from "./Routes/index.js";

const app = express()

app.use(express.json())
app.use(cors())

dbConnection()

app.use(router);

app.put('/edittask/:id', async (req, res)=> {
    try {
        const id = req.params.id
        const body = req.body
        const findId = await taskModel.findOneAndUpdate({_id:id}, body)
        if(findId){
            res.json({
            message:'updated',
            data: body
        })
        }
        console.log(id)
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})

app.delete('/deleteTask/:id', async (req,res)=> {
try {
    const id = req.params.id
    const deleteTask = await taskModel.findByIdAndDelete(id) 
    console.log(deleteTask)
    res.json({
        message:'Task Deleted',
        data: deletedTask
    })
} catch (error) {
    res.json({
        message:error
    })
}
})




app.listen(process.env.port, ()=> {
    console.log('server is running')
})