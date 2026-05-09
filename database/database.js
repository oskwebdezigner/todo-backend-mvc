import mongoose from "mongoose";

const dbConnection = () => {
    const uri = process.env.uri

    mongoose.connect(uri);

    mongoose.connection.on('connected', ()=> {
        console.log('mongo db connected')
    })

    mongoose.connection.on('error', ()=> {
        console.log('error connection')
    })


}

export default dbConnection;