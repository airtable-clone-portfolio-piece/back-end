
exports.up = function(knex, Promise) {
  return knex.schema.createTable("table", table => {
    table.increments();
    table.string('name')
    table
        .integer('database_id')
        .unsigned()
        .references('id')
        .inTable('database')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("table");
};
