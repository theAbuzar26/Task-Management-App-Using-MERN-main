import mongoose, { Schema } from "mongoose";

// const TaskSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     status: {
//         type: String,
//         required: true,
//         default: "Pending",
//         enum: ['Pending', 'Running', 'Completed', 'Failed']
//     }
// }, { timestamps: true })

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
    enum: ["Pending", "Progress", "Completed"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TaskModel = new mongoose.model("Task", TaskSchema, "tasks");
export default TaskModel;
