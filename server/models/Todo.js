const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  dueDate: {
    type: Date, 
    required: false,
  },
  status:  {
    type: String,
    enum: ['PENDING', 'DONE', 'ONGOING'],
    default: 'PENDING',
  }, 
  priority:{
    type: String,
    enum: ['HIGH', 'MEDIUM', 'LOW'],
    default: 'MEDIUM',
  }, 
}, {timestamps: true})

const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel