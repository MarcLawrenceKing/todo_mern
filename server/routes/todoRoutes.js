const express = require('express');
const router = express.Router();
const TodoModel = require('../models/Todo')

router.post('/', (req, res) => {
  const { title, description, dueDate, status, priority } = req.body;
  TodoModel.create({
    title,
    description,
    dueDate,
    status,
    priority
  })
  .then(result => res.json(result)) 
  .catch(err => console.log(err))
})

router.get('/', (req, res) => {
  TodoModel.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

router.put('/:id', (req, res) => {
  const {id} = req.params;
  // Destructure the body to exclude immutable fields
  const { _id, createdAt, updatedAt, __v, ...updateData } = req.body;

  TodoModel.findByIdAndUpdate(id, updateData, {new:true})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  TodoModel.findByIdAndDelete(id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

module.exports = router;