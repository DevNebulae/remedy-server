import createSchema from "./graphql"
import Koa from "koa"
import KoaRouter from "koa-router"
import koaBody from "koa-bodyparser"
import { graphiqlKoa, graphqlKoa } from "graphql-server-koa"

export default () => {
  const app = new Koa()
  const router = new KoaRouter()
  const graphql = graphqlKoa({ schema: createSchema() })

  router.post("/graphql", koaBody(), graphql)
  router.get("/graphql", graphql)

  if (process.env.NODE_ENV === "development")
    router.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }))

  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}
