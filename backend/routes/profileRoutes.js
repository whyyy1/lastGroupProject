const express = require('express')

const router = express.Router()

const profileController = require('../controllers/profileController')

const { authorize } = require('../middleware/authMiddleware')



router.get('/:id',profileController.index)



module.exports = router