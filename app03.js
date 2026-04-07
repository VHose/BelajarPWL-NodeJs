const http = require('http')
const fs = require('fs')
const { error } = require('console')

const server = http.createServer((req, res) =>{
    fs.readFile('public/index.html', (error, data) => {
        if (error) {
            res.writeHead(404, {'Content-type' : 'text/html'})
            return res.end('File not found (404)')
        } else{
            res.writeHead(200, {'Content-type' : 'text/html'})
            res.write(data)
            return res.end()
        }
    })
})

const port = 8000
server.listen(port,()=>{
    console.log(`Server run at port ${port}`)
})