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
    const newId = Number(id)
    const data = req.body
    prjDb.addTask(newId,data)
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(400).json(err))
})

router.get('/task',(req,res)=>{
    prjDb.getTask()
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(400).json(err))
})

router.get('/task',(req,res)=>{
    prjDb.getAllTask()
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(400).json(err))
})

router.get('/:id/task',(req,res)=>{
    const id = Number(req.params.id)
    prjDb.getTaskById(id)
    .then(item=>res.status(200).json(item))
    .catch(err=>res.status(400).json(err))
})

module.exports = router