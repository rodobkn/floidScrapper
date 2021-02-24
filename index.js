const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const scrapper = require('./scrapper');

const { PORT = 5000 } = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.json()); //To transform the incoming request to json.

let lastBalance = null;

app.get('/', (req, res) => {
  res.send(`El último balance que consultaste fue: ${lastBalance}`);
});

app.post('/scrapping', async (req, res) => {
  try {
    const { rut, password } = req.body;
    const balance = await scrapper.executeScrap(rut, password);
    lastBalance = balance;
    console.log('Balance: ', balance);
    res.send({ balance });
  } catch (error) {
    console.log(error);
    res.send({ error: 'Something went wrong. Make sure to write in a good way your credentials' })
  }
});

app.listen(PORT, (err) => {
  console.log(`Listening on PORT: ${PORT}`);
});
