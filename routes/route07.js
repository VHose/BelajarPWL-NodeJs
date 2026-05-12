const express = require('express')
const router = express.Router()
const path = require('path')

// harus ada urlencoded biar bisa kebaca dari form nya gitu di post nya
router.use(express.urlencoded({extended : false}))

router.get('/form', (request, response) => {
    response.status(200).sendFile(path.join(__dirname, '../views','forms.html'))
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
    response.status(200).sendFile(path.join(__dirname, '../views','index.html'))
})

module.exports = router
