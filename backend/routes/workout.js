const express = requires('express')

const {
    createWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout,
} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id',createWorkout)

router.post('/', createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router
