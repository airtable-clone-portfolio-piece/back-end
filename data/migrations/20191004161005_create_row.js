
exports.up = function(knex, Promise) {
  return knex.schema.createTable("row", table => {
    table.increments();
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
  return knex.schema.dropTableIfExists("row");
};
