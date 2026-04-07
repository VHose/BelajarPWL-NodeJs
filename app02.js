const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url)
    console.log(req.method)
    return res.end()
})

const port = 8000
server.listen(port, () => {
    console.log(`Server run at port ${port}`)
})