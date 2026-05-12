// Routing di exporess -- klo di laravel tuh yang web.php
const express = require('express')
const app = express()

// harus ada urlencoded biar bisa kebaca dari form nya gitu di post nya
app.use(express.urlencoded({extended : false}))

app.get('/page1', (request, response) => {
    response.send(`
        <form method="post" action="/page2">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required> 
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required> 
        </div>
        <button type="submit">Submit</button>
        </form>
    `)
})

app.post('/page2', (request, response) => {
    const name = request.body.name
    const email = request.body.email
    response.send(`
        <h1>Hello from express dari page 2  </h1>
        <p>Name : ${name} </p>
        <p>Email : ${email} </p>
    `)
})

app.get('/', (request, response) => {
    response.send(`<h1>Hello from express</h1>`)
})

const port = 5000
app.listen(port, () => {
    console.log(`Server run at port ${port}`)
})
