const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login', {title: 'login'})
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Username:', username);
    console.log('Password:', password);
    res.send('Login successful!');
});
module.exports = router;