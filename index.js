const app = require('./server')
const projRoutes = require('./projects/projectRoutes')


const port = 5000

app.use('/api/projects',projRoutes)

app.listen(port ,()=>console.log('now listening on ' + port))
