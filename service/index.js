const express = require('express')
const cors = require('cors')
const mock = require('./mock.json')

const app = express()
app.use(cors())

app.get('/api/professionals', (req, res) => {
  const count = req.query.count
  res.send(mock)
})

app.get('/api/professional/:id', (req, res) => {
  const id = req.params.id
  const filter = mock.filter((profissional) => profissional.id == id)
  res.send(filter)
})

app.listen(3030, () => {
  console.log('server started on port 3030')
})
