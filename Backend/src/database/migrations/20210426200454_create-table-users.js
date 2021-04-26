
exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
      table.increments("id");
      table.string("name", 255).notNullable();
      table.string("username", 255).unique().notNullable();
      table.string("email", 255).unique().notNullable();
      table.string("password", 255).notNullable();
      table.timestamp("created_at", { useTz: true }).defaultTo(knex.fn.now());
      table.timestamp("updated_at", { useTz: true }).defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
