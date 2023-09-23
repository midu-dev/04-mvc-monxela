import { TaskModel } from '../models/task.js'

export const getAllTasks = (req, res) => {
  try {
    const tasks = TaskModel.getAllTasks()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const addTask = (req, res) => {
  try {
    const { description } = req.body
    const task = TaskModel.addTask({ description })
    res.json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteTask = (req, res) => {
  try {
    const { id } = req.params
    TaskModel.deleteTask({ id })
    res.json({ message: 'Deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
