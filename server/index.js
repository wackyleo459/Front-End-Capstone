const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/', router);
app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`)
})

