const express = require('express')

const app = express()

app.get('/api/poslist', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.sendFile(__dirname + '/apis/poslist.json')
})

app.get('/api/poslist/refresh', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.sendFile(__dirname + '/apis/poslist-refresh.json')
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, () => {
  console.log('localhost:3000');
})
