const express = require('express')
const test = require('../controllers/user.controller.js')

const router = express.Router();

router.get('/', test)

module.exports = router;