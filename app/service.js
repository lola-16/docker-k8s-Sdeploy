const express = require('express')
const app = express()
app.get('/', (req, res)=> res.send('K8s Deploy'))

app.listen(80,'0.0.0.0', ()=> console.log('Example app listen on port 80!'))