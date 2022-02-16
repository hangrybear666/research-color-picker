const jsonServer = require('json-server')
const dotenv = require('dotenv').config()
const server = jsonServer.create()
const router = jsonServer.router('./data/colors.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use((req, res, next) => {
    if (req.method === 'DELETE') {
        res.sendStatus(401)
        return
    } else if (req.method === 'PUT') {
        res.sendStatus(401)
        return
    } else {
        next()
    }
  })

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        // Validate
    }
    // Continue to JSON Server router
    next()
  })
server.use(router)

const port = process.env.JSON_SERVER_PORT || 3004


server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})