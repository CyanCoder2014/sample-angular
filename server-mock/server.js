

const express = require('express')
const port = 3000


const bodyParser = require('body-parser');

const app = express();
const course = require('./courses');



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


app.get('/', (req, res) => {
  res.send('mock-data-server')
})

app.get('/courses', (req, res) => {
  res.json(course);
});



