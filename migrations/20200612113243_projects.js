
exports.up = function(knex) {
  knex.schema.createTable('projects',proj=>{
      proj.increments('id')
      proj.text('project_name').notNullable()
      proj.text('description')
      proj.boolean('completed').defaultTo(false)
  })
  .createTable('resources',res=>{
      res.increments('id')
      res.text('name').unique()
      res.text('description')
      res.integer('project_id')
        .references('id')
        .inTable('projects')
  })

  .createTable('task',task=>{
      task.uuid('id')
      task.text('description')
      task.text('notes')
      task.boolean('task_completed')
      .notNullable()
      .defaultTo(false)
  })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('task')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  
};
