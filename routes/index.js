const router = require('express').Router()
const Controllers = require('../controllers/Controller')

router.get('/', Controllers.home)
router.get('/add', Controllers.addForm)
router.post('/add', Controllers.addPost)
router.get('/:id/edit', Controllers.editForm)
router.post('/:id/edit', Controllers.editPost)
router.get('/:id/delete', Controllers.delete)
router.get('/:id/doing', Controllers.doing)
router.get('/:id/done', Controllers.done)


module.exports = router