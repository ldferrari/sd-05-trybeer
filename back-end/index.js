const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});

app.listen(3001, () => console.log('listenning on 3001'));
