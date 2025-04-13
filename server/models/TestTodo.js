const mongoose = require('mongoose')

const TestTodoSchema = new mongoose.Schema({
  task:String,
  done: {
    type:Boolean,
    default:false
  }
})

const TestTodoModel = mongoose.model("testtodos", TestTodoSchema)
module.exports = TestTodoModel