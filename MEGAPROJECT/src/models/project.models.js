import mongoose, {Schema} from "mongoose";


const projectSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique: true,
    },
    description:{
        type:String,
        require:true,
        trim:true,
        unique: true,
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true});


const Project = mongoose.model("Project", projectSchema);

export default Project;