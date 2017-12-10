import app from "./server"
import http from "http"

const start = async () => {
  let currentApp = await app().then(result => result.callback())
  const server = http.createServer(currentApp)
  server.listen(8080)

  if (module.hot) {
    module.hot.accept(["./server"], () => {
      server.removeListener("request", currentApp)
      currentApp = app().callback()
      server.on("request", currentApp)
    })
  }
}

start()
