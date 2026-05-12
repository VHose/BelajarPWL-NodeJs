const express = require('express')
const router = express.Router()

// harus ada urlencoded biar bisa kebaca dari form nya gitu di post nya
router.use(express.urlencoded({extended : false}))

router.get('/page1', (request, response) => {
    response.send(`Haii saya page1 di route06
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

router.post('/page2', (request, response) => {
    const name = request.body.name
    const email = request.body.email
    response.send(`
        <h1>Hello from express dari page 2  </h1>
        <p>Name : ${name} </p>
        <p>Email : ${email} </p>
        <a href="/page1"> Back to Form </a>
    `)
})

router.get('/', (request, response) => {
    response.send(`<h1>Hello from express</h1>`)
})

module.exports = router
