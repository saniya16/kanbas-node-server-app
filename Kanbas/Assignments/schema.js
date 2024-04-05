import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    id: String,
    description: String,
    dueDate: Date,
    availableFromDate: Date,
    availableUntilDate: Date,
    course: String,
    points: Number
  },
  { collection: "assignments" });
export default assignmentSchema;