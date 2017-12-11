import createSchema from "./graphql"
import Koa from "koa"
import KoaRouter from "koa-router"
import koaBody from "koa-bodyparser"
import { graphiqlKoa, graphqlKoa } from "graphql-server-koa"
import { createModels, linkModels, sequelize } from "./database"

export default async () => {
  const app = new Koa()
  const router = new KoaRouter()
  const models = createModels(sequelize)
  linkModels(models)

  const graphql = graphqlKoa(() => ({
    context: { models },
    schema: createSchema()
  }))

  await sequelize.authenticate()
  console.info("Database connection has been established!")

  await sequelize.sync({ force: true })
  console.info("Sequelize synced with database.")

  router.post("/graphql", koaBody(), graphql)
  router.get("/graphql", graphql)

  if (process.env.NODE_ENV === "development")
    router.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }))

  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}
