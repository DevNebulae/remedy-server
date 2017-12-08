import express from "express"
// import Koa from "koa"
// import Router from "koa-router"

const app = express()
// const router = new Router()

app.get("/api", (req, res) => {
  res.send({
    message: "Hello!"
  })
})

// router.get("/", context => {
//   context.body = "Hello from the otter side!"
// })

// app.use(router.routes()).use(router.allowedMethods())

export default app
