const express = require('express')
const router = express.Router()
const path = require('path')

// harus ada urlencoded biar bisa kebaca dari form nya gitu di post nya
router.use(express.urlencoded({extended : false}))

router.get('/form', (request, response) => {
    response.status(200).render('forms')
})

router.post('/page2', (request, response) => {
    const name = request.body.name
    const email = request.body.email
    response.status(200).render('receiver', {
        name, email
    })
})

router.get('/', (request, response) => {
    response.status(200).render('index')
})

module.exports = router
