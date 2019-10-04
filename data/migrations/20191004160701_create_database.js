
exports.up = function(knex, Promise) {
  return knex.schema.createTable("database", table => {
    table.increments();
    table.string('name')
    table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('user')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("database");
};
