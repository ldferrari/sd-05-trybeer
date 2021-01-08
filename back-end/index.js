const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registerController = require('./controllers/registerController');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/register', registerController);

app.use(errorMiddleware);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
