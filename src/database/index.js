import Sequelize from "sequelize"
import createModels from "./models"

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
