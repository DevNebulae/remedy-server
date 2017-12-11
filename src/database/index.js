import Sequelize from "sequelize"
import createModels from "./models"

/**
 * To support hot reloading, the connection with the
 * database will only be set up once. However, the model
 * creation will happen with every hot reload. If you set
 * Sequelize to forcefully update every time a hot reload
 * occurs, the database will be automatically upgraded and
 * the relations will be set up. Keep in mind that a
 * forceful sync will delete your data!
 */

// TODO: credentials in config files
const sequelize = new Sequelize("remedy", "remedy-music", "antidote", {
  dialect: "postgres",
  host: "localhost",
  define: {
    underscored: true
  },
  operatorsAliases: Sequelize.Op
})

const linkModels = models =>
  Object.keys(models).forEach(modelName => {
    if ("associate" in models[modelName]) {
      models[modelName].associate(models)
    }
  })

export { Sequelize, createModels, linkModels, sequelize }
