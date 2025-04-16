const express = require('express');
const router = express.Router();
const TodoModel = require('../models/Todo')

router.post('/add', (req, res) => {
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

module.exports = router;