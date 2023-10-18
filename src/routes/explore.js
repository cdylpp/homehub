const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('explore', {title: 'explore'})
});

module.exports = router;