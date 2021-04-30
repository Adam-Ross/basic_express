const express = require('express')
const PORT = 5000 || process.env.PORT

// User postMan to test the route

// Remember to make a server or start script in the package.json
// Refer to package.json

// Remember to add nodemon as a dev dependency

const app = express()

app.get('/', (req, res) => {
    res.send('Working')
})  

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})