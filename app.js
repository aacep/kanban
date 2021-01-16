const express = require('express')
const { urlencoded } = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(urlencoded({extended:true}))

app.use('/',routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})