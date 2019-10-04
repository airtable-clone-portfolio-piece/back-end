
exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", table => {
    table.increments();
    table.string('username').unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};
