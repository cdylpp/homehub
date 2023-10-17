const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('sign-up', {title: 'sign-up'})
});

router.post('/', (req, res) => {
    const newUser = {
        first: req.body.firstName,
        last: req.body.lastName,
        email: req.body.email,
        username: req.body.usrname,
        password: req.body.pswd,
        homeLink: req.body.link
    }
    console.log(newUser);
    res.send('Account Activation Successful!');
});

module.exports = router;



