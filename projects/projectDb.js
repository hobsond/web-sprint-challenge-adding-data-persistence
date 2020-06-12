const db = require('../knexDb')

function addResource(data){
    const {name,description } = data
   return db('resources')
    .insert({name,description:description || null})
}

function getResources(){
    return db('resources')
}

function addProject(data){
    const {name,description} = data
    return db('projects')
    .insert({project_name:name,description:description || null})
}

function getProjects(){
    return db('projects')
}

function addTask(id,data){
    const {notes,description} = data
    return db('task')
    .insert({project_id:id,notes,description})
}
function getTask(){
    return db('projects')
    .crossJoin('task','projects.id','task.id')
    .select('notes','project_name')
    .orderBy('project_name','asc')
    
}
function getAllTask(){
    return db('task')
}

function getTaskById(id){
    return db('task')
    .where('project_id', id)
}
module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTask,
    getAllTask,
    getTaskById

}