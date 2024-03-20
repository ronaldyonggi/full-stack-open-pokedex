const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  this_will_cause_error
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

// NEW FEATURE HERE!!!
// Additional new feature to check if deployment only occurs when branches are merged