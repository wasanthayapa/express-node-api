const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
    name: { type: String, required: [true,"name is required for student"], trim: true },
    email: { type: String, required: [true,"email is required for student"], unique: [true,"email should unique"], lowercase: true },
    age: { type: Number, min: 0, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {timestamps:true}
);

const Student=mongoose.model("Student",studentSchema);

module.exports=Student;
