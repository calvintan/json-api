const app = require('./app.js')
const port = process.env.PORT || 1234
app.listen(port)
console.log(`Ready on port ${ port }`)
