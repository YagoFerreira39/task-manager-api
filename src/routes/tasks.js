const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')

const Task = require('../controllers/task');

router.route('/').get(authMiddleware, Task.getAll).post(authMiddleware, Task.createTask);
router.route('/:id').get(authMiddleware, Task.getTask)

module.exports = router;