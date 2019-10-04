
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cell", table => {
    table.increments();
    table.text('data')
    table
        .integer('column_id')
        .unsigned()
        .references('id')
        .inTable('column')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table
        .integer('row_id')
        .unsigned()
        .references('id')
        .inTable('row')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cell");
};
