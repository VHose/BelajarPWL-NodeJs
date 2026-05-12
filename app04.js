// Routing di exporess -- klo di laravel tuh yang web.php
const express = require('express')
const app = express()

app.get('/page1',(request,response)=>{
    response.send(`<h1>Hello from express dari page 1</h1>`)
})

app.get('/page2',(request,response)=>{
    response.send(`<h1>Hello from express dari page 2</h1>`)
})

app.get('/',(request,response)=> {
    response.send(`<h1>Hello from express</h1>`)
})

const port = 5000
app.listen(port, () => {
    console.log(`Server run at port ${port}`)
})
