const express = require('express')
const app = express()

app.listen(3000, () => 
  console.log(`The APP listening on port 3000`))

app.use(express.static('public'));

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
