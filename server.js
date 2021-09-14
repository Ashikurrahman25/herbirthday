const path = require('path')
const express = require('express')
const app = express()
const data = require('./info.json')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.render('index', { data: data.data })
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server is listening on port ${port}`))
