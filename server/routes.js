const controller = require('./controller.js');

const router = require('express').Router();

router.get('/waveformplayer/:id', controller.waveformPlayer);
router.get('/comments/:id', controller.comments);

module.exports = router;