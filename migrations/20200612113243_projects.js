
exports.up = function(knex) {
 return  knex.schema.createTable('projects',proj=>{
      proj.increments('id')
      proj.text('project_name')
      .unique()
      .notNullable()
      proj.text('project_description')
      proj.boolean('completed').defaultTo(false)
  })
  .createTable('resources',res=>{
      res.increments('id')
      res.text('name')
      .notNullable()
      .unique()
      res.text('resource_description')

    //   res.integer('project_id')
    //     .references('id')
    //     .inTable('projects')
  })

  .createTable('project_resources',pr=>{
      pr.uuid('id')
      pr.integer('project_id')
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    pr.integer('resource_id')
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })


  .createTable('task',task=>{
      task.increments('id')
      task.text('description')
      task.text('notes')
      task.integer('project_id')
      .references('id')
      .inTable('projects')
      task.boolean('task_completed')
      .notNullable()
      .defaultTo(false)
  })

  .createTable('projects_task',pt=>{
      pt.uuid('id')
      pt.integer('project_id')
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    pt.integer('task_id')
        .references('id')
        .inTable('task')
        .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects_task')
    .dropTableIfExists('task')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  
};
