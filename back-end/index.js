const express = require('express');
const bodyParser = require('body-parser');
const registerController = require('./controllers/registerController');

const app = express();

app.use(bodyParser.json());

app.use('/register', registerController);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
