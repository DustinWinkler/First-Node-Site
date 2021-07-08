import express from 'express'
import path from 'path'

const app = express()
const port = 8080
const __dirname = path.resolve(path.dirname(''));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'))
})

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/404.html'))
})

app.listen(port, ()=>{
  console.log('Server start...')
})