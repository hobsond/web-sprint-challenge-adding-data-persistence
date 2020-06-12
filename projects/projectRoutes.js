const router = require('express').Router()
const prjDb = require('./projectDb')

router.get('/resources',(req,res)=>{
    prjDb.getResources()
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(400).json(err))
})

router.post('/resources',(req,res)=>{
    const data = req.body
    prjDb.addResource(data)
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(400).json(err))
})

router.post('/',(req,res)=>{
    const data = req.body
    prjDb.addProject(data)
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(400).json(err))
})

router.get('/',(req,res)=>{
    prjDb.getProjects()
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(400).json(err))
})

router.post('/:id/task',(req,res)=>{
    const id = req.params.id
    const data = req.body
    prjDb.addTask(id,data)
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(400).json(err))
})

module.exports = router