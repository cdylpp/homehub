const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('sign-up', {title: 'sign-up'})
});


router.post('/sign-up', (req, res) => {
    const { firstName, lastName, email, usrname, pswd, link } = req.body;
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Username:', usrname);
    console.log('Password:', pswd);
    console.log('Existing Link:', link);
    res.send('Account Activation Successful!')
});
module.exports = router;