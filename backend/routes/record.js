const checkToken = require('../Middleware/Auth');

const { find, insert, del, modify,reset } = require('../controller/recordcontroller');
const router = require('express').Router();

router.get('/get', checkToken, find);
router.post('/add', checkToken, insert);
router.put('/update', checkToken, modify);
router.delete('/remove', checkToken, del);
router.put('/reset',checkToken,reset);
router.put('/reset',checkToken,reset);

module.exports = router;