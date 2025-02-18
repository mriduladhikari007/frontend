const {signup, login, forget, reset} = require('../controller/autocontroller')

const router = require('express').Router();

router.post('/login',login);
router.post('/signup',signup);
router.post('/forget',forget);
router.put('/reset',reset);

module.exports= router;
