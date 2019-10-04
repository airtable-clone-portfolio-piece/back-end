
exports.up = function(knex, Promise) {
  return knex.schema.createTable("column", table => {
    table.increments();
    table.string('name')
    table.integer('position')
    table
        .integer('table_id')
        .unsigned()
        .references('id')
        .inTable('table')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("column");
};
