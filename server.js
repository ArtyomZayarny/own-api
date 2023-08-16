
const express = require('express')
const app = express()
const port = 3000

//TODO: Make api with authentication and authorization
// Use JWT strategy
// Some routes need to be protected auth middleware


app.get('/', (req, res) => {
  res.send('Hello World!')
})
//

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})