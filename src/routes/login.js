const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login', {title: 'login'})
});

router.post('/', (req, res) => {
    const { username, password } = req.body;
  
    // Replace this with your actual authentication logic
    // For simplicity, we'll just log the credentials
    console.log('Username:', username);
    console.log('Password:', password);
  
    // Send a response to the client
    res.send('Login successful!');
  });

module.exports = router;