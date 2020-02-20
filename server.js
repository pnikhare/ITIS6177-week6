const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const axios = require('axios')

app.use(cors())
//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', (req, res) => {
    axios.get('https://dplny67w0f.execute-api.us-east-2.amazonaws.com/default/hello-world-python')
    .then(function (response) {
    res.send(response.data)
    })
    .catch(function (error) {
    console.log(error);
    });
    })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))