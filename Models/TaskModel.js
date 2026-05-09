import mongoose, { mongo } from "mongoose";

const schema = mongoose.Schema({
    todoItem:String
});

const taskModel = mongoose.model('task', schema)

export default taskModel