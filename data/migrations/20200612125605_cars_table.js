exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer("VIN").notNullable()
        tbl.string("make", 200).notNullable()
        tbl.string("model", 200).notNullable()
        tbl.integer("mileage").notNullable()
        tbl.string("transmissionType");
        tbl.string("statusOfTitle");
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
  };