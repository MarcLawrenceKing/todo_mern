const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const TestTodoModel = require('./models/TestTodo')
const TodoModel = require('./models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

const todoRoutes = require('./routes/todoRoutes')

app.use('/api/todo', todoRoutes);

// app.get('/get', (req, res) => {
//   TestTodoModel.find()
//   .then(result => res.json(result))
//   .catch(err => res.json(err))
// })

// app.put('/update/:id', (req, res) => {
//   const {id} = req.params;
//   TestTodoModel.findByIdAndUpdate({_id: id}, {done: true})
//   .then(result => res.json(result))
//   .catch(err => res.json(err))
// })

// app.delete('/delete/:id', (req, res) => {
//   const {id} = req.params;
//   TestTodoModel.findByIdAndDelete({_id: id})
//   .then(result => res.json(result))
//   .catch(err => res.json(err))
// })

// app.post('/add', (req, res) => {
//   const task = req.body.task;
//   TestTodoModel.create({
//     task: task
//   })
//   .then(result => res.json(result)) 
//   .catch(err => res.json(err))
// })


mongoose.connect('mongodb://127.0.0.1:27017/test') //automatically create test database

app.listen(3001,() => {
  console.log("server is running ")
})