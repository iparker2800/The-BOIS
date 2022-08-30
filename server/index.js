const express = require('express')
const app = express()
const port = 3000

app.use(express.static('client'))

// Start the server
app.listen(port, function() {
    console.log(`app listening on http://localhost:${port}`)
  })
