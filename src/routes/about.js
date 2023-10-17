const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('about', {title: 'about'})
});
module.exports = router;