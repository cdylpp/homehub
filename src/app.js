const app = require('express')();
const path = require("path");
const PORT = 8080;

app.use(require('express').static('public'));
app.use(require('body-parser').urlencoded({ extended: true }));


const options = {
    // maps root requests (e.g. "/") to subfolder named "public"
    root: path.join(__dirname, "public") 
 };


app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/sign-up', require('./routes/sign-up'));
app.use('/about', require('./routes/about'));



// With express, you define handlers for routes.
app.get("/:filename", (req, resp) => {
    resp.sendFile(req.params.filename, options, (err) => {
       if (err) {
          console.log(err);
          resp.status(404).send("File Not Found");
       }
       else {
          console.log("Sent:", req.params.filename);
       }
    });
 });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





