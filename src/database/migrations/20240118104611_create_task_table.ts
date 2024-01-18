import { Knex } from "knex";
// import { PEOPLE } from '../../constants/database';

const TABLE_NAME = "todo";

/**
 * Create table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements();
    table.string("title", 255).notNullable();

    table.string("description", 255).notNullable();

    table.boolean("completed").notNullable();

    table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));

    table
      .bigInteger("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("auth_user");

    // table.timestamp("updated_at").nullable();

    // table
    //   .bigInteger("updated_by")
    //   .unsigned()
    //   .references("id")
    //   .inTable(TABLE_NAME)
    //   .nullable();
  });
}

/**
 * Drop table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
