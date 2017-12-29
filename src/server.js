import "colors"
import Koa from "koa"
import KoaRouter from "koa-router"
import createSchema from "./graphql"
import koaBody from "koa-bodyparser"
import koaCors from "@koa/cors"
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

  await sequelize.sync()
  console.info("Sequelize has been synced with database!".green)

  router.post("/graphql", koaBody(), graphql)
  router.get("/graphql", graphql)

  if (process.env.NODE_ENV === "development") {
    router.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }))
    app.use(koaCors())
  }

  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}
