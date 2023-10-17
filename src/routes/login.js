const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login', {title: 'login'})
});

router.post('/', (req, res) => {
    const user  = {
        username: req.body.username,
        password: req.body.password
    }
    console.log(user);
    res.send('Login successful!');
});
module.exports = router;




