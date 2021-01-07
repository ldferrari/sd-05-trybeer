const express = require('express');

// const path = require('path');

const bodyParser = require('body-parser');

const loginController = require('./Controllers/loginController');

const registerController = require('./Controllers/userController');

const app = express();

app.use(bodyParser.json());

app.use('/login', (req,res,next)=>{
  console.log(req.body)
  next()
}, loginController);

app.use('/register', registerController);

// app.use('/back-end/public/', express.static(path.join(__dirname, '..', 'public')));

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`O pai tá ON no projeto e na porta ${PORT}`);
});
