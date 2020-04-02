const express = require('express')

const { findAll } = require('../controllers/PostController')

const router = express.Router()

router.get('/', findAll)

module.exports = router
