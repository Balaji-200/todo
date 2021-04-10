const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// const todosSchema = new mongoose.Schema({ 
//     todos: [todoSchema] 
// });
module.exports = mongoose.model('ToDo', todoSchema);