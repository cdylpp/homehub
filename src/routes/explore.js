const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.headers);
    res.render('explore', {title: 'explore'})
});

module.exports = router;