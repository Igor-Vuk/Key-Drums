const Express = require('express')
const app = Express()
const path = require('path')

const APP_PORT = '3000'
const PORT = process.env.PORT || APP_PORT

app.use(Express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) })
