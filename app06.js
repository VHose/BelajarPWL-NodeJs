const express = require('express')
const app = express()
const router = require('./routes/route06')

app.use(router)

const port = 5000
app.listen(port, () => {
    console.log(`Server run at port ${port}`)
})
