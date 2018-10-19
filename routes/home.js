const express = require('express')
const router = express.Router()

const {list, create, remove} = require('../controllers/homeController')

router.get('/list', list)
router.get('/create', create)
router.get('/remove', remove)

module.exports = router