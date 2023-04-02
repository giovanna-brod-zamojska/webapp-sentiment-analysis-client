const Task = require('../models/task.model');

//wrong code example: deprecated, the callback function is no longer accepted:
/*exports.getAllTasks = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
};*/

exports.getAllTasks = (req, res) => {
    Task.find({})
      .then(tasks => res.status(200).json(tasks))
      .catch(error => res.status(500).json({ error }));
};
  

// Add a new task
exports.addTask = function (req, res) {
    const newTask = new Task(req.body);
    newTask.save()
    .then(savedTask => {
      res.status(201).json(savedTask);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while saving the task.' });
    });
};

// Delete a task by id
exports.deleteTask = function(req, res) {
    Task.deleteOne({ _id: req.params.id })
      .then(result => {
        res.json({ message: 'Task deleted successfully' });
      })
      .catch(err => {
        res.send(err);
      });
};
  

