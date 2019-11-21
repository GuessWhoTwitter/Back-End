exports.up = function(knex) {
    return knex.schema.createTable('twitter_users', tbl => {
        
     tbl.increments();


    tbl.string('tweet', 280).notNullable();
     
    })
    .createTable('photo', tbl => {
        tbl.increments();

        tbl
        .integer('twitter_user_id')
        .unsigned()
        .references('id')
        .inTable('twitter_users')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE');

        tbl.binary('pic').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('photo')
    .dropTableIfExists('twitter_users');
  };

