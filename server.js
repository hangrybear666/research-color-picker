const path = require('path')
const morgan = require('morgan')
const express = require('express')
const dotenv = require('dotenv').config()
const publicPath = path.join(__dirname, '..', 'research-color-picker/frontend-selection/build')
const targetedPath = path.join(__dirname, '..', 'research-color-picker/frontend-analysis/build')
const port = process.env.NODE_SERVER_PORT || 3003

const app = express()

app.use(express.static(publicPath)) // TODO
app.use(express.static(targetedPath)) // TODO
/**
 * morgan REST logging middleware
 * the custom token adds logging of added objects for
 * POST requests, otherwise adds null
 */
 morgan.token('postBody', function getHeadr (req, res) {
  if (!req.body) {
    return null
  } else {
    return Object.keys(req.body).length === 0 ? null : JSON.stringify(req.body)
  }
})
app.use(morgan('Received [:method] request to URL [:url] by address [:remote-addr] and client [:user-agent] using HTTP version [:http-version] with status [:status] - in time [:response-time ms] :postBody'))

app.get('/analysis', (req, res) => {
  res.sendFile(path.join(targetedPath, 'index.html'));
})

app.get('*', (req, res) => {
  res.status(404).end()
})

app.listen(port, () => console.log(`Colors Node Server is running on port ${port}`))