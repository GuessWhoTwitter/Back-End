exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        
      tbl.increments();
  
      tbl
        .string('username', 255)
        .notNullable()
        .unique();

      tbl
        .string('password', 255)
        .notNullable();

      tbl.integer('score', 25);

    })
    // .createTable('score', tbl => {
    //   tbl.increments();

    //   tbl
    //   .integer('user_id')
    //   .unsigned()
    //   .references('id')
    //   .inTable('users')
    //   .onDelete('RESTRICT') 
    //   .onUpdate('CASCADE');

    //   tbl.integer('score', 25);
    // })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
