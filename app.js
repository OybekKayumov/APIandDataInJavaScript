const express = require('express')
const app = express()

app.listen(3000, () => 
  console.log(`The APP listening on port 3000`))

app.use(express.static('public'));

// to POST data as JSON on Server
app.use(express.json({limit: '1mb'}));

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.post('/api', (request, response) => {
  console.log('I got a request!');
  console.log('request: ', request.body);

  response.json({
    status: 'success!',
    latitude: lat,
    longitude: lon
  });
});  
