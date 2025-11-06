console.log("Hello!")
const express = require('express')
/** Body parser allows parsing .json data easily */
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan  = require('morgan')

/** Building the Express server **/
const app = express()
app.use(morgan('combined'))
/** Allow app to easily parse any JSON requests */
app.use(bodyParser.json())
/** Allow any client to acccess this (any domain from arounf the world) */
app.use(cors())

/** sends as a response a json object with the attribute message of... */
app.get('/status', (req, res) => {
    res.send({
        message: 'Hello worldddd'
    })
})

/** npm run dev in the command line to start the server */

app.listen(process.env.PORT || 8080)
