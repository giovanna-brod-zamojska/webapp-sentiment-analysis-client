const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

router.get('/', taskController.getAllTasks);
router.post('/', taskController.addTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
