import Koa from "koa"
import Router from "koa-router"

export default () => {
  const app = new Koa()
  const router = new Router()

  router.get("/", context => {
    context.body = "Hello from the other side!"
  })

  app.use(router.routes()).use(router.allowedMethods())

  return app
}
