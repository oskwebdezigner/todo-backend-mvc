import taskModel from "../Models/TaskModel.js";

const GetTasks = async(req,res) => {
    try {
            const getAllTasks = await taskModel.find();
            res.json({
                message:"Here is the list of tasks",
                data:getAllTasks
            })
        } catch (error) {
            res.json({
                message:error
            })
        }
}

export default GetTasks;