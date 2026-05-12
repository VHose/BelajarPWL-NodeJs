const express = require('express')
const app = express()
const router = require('./routes/route08')

app.set('view engine','ejs')
app.use(router)

const port = 5000
app.listen(port, () => {
    console.log(`Server run at port ${port}`)
})
