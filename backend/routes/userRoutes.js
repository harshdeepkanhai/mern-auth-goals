const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getME } = require("../controllers/userController")
const { protect } = require("../middleware/authMiddleware")

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect , getME)

// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router