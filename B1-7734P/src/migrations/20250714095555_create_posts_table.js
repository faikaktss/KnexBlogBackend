export async function up(knex){
    await knex.schema.createTable('posts',(table)=>{
        table.increments('id').primary();
        table.integer('category_id').references('id').inTable('categories').onDelete('CASCADE');
        table.string('title',255).notNullable();
        table.text('content').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('publish_at').defaultTo(knex.fn.now());
        table.timestamp('deleted_at').defaultTo(knex.fn.now());
    })
}

export async function down(knex){
    await knex.schema.dropTable('posts');
}