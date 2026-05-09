import taskModel from "../Models/TaskModel.js";

const CreateTask = async(req,res) => {
    try {
            const task = req.body;

            const createTask = await taskModel.create(task)

            console.log(createTask);

            res.json({
                message:'task added'
            })
        } catch (error) {
            res.json({
                message:error
            })
        }
}

export default CreateTask;