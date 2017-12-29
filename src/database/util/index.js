/**
 * Generates a foreign key name with the format
 * `[table name]Id`. This foreign key name can be called
 * from a Sequelize query to perform joining.
 * @param {string} tableName
 * @returns a string with the specified format.
 */
export const generateForeignKeyName = tableName => `${tableName}Id`

/**
 * Generates a foreign key field with the format
 * `fk_[table name]_id`.
 * @param {string} tableName
 * @returns a string with the specified format.
 */
export const generateForeignKeyField = tableName => `fk_${tableName}_id`
