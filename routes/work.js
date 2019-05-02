const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/work')
const router = express.Router()

router.get('/:categoryId', controller.getByCategoryId)
router.get('/:id', controller.getById)
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create)
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.update)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)

module.exports = router