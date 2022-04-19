const express = require('express')
const app = express()
const port = 3000

app.set('secret', '5d2xdc5ds321sdfssv')

app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin/index')(app)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`http://localhost:${port}`))