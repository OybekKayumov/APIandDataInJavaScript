const express = require('express')
const Datastore = require('nedb');
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
const database = new Datastore('database.db');
//first time creates file database.db
database.loadDatabase();

//insert data into DB
database.insert({name: 'John', status:'🚀'});
database.insert({name: 'Mike', status:'✅'});

app.post('/api', (request, response) => {
  console.log('I got a request!');
  console.log('request: ', request.body);

  const data = request.body;
  response.json({
    status: 'success!',
    latitude: data.lat,
    longitude: data.lon
  });
});  
