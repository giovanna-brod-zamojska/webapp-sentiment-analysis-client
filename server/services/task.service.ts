const Task = require('../models/task.model');

const taskService = {
  getAllTasks: async () => {
    const tasks = await Task.find();
    return tasks;
  },

  addTask: async (task: any) => {
    const newTask = new Task(task);
    await newTask.save();
    return newTask;
  },

  deleteTask: async (taskId: String) => {
    await Task.findByIdAndDelete(taskId);
  }
};

module.exports = taskService;
