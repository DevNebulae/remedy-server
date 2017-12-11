import app from "./server"
import http from "http"

const start = async () => {
  let currentApp = (await app()).callback()
  const server = http.createServer(currentApp)
  server.listen(8080)

  if (module.hot) {
    module.hot.accept(["./server"], async () => {
      server.removeListener("request", currentApp)
      currentApp = (await app()).callback()
      server.on("request", currentApp)
    })
  }
}

start()
