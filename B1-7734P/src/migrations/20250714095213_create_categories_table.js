export async function up(knex){
    await knex.schema.createTable('categories',(table) =>{
        table.increments('id').primary();
        table.string('name',100).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('deleted_at').defaultTo(knex.fn.now());
    })  
}

export async function down(knex){
    await knex.schema.dropTable('categories');
}