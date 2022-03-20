import { handler } from "./build/handler.js"
import Koa from "koa";
import Router from "koa-router";

const server = new Koa();
const router = new Router();

// add a route that lives separately from the SvelteKit app
router.get("/healthcheck", (req, res) => {
  res.end("ok")
})

server.use(handler)

server.listen(3000, () => {
  console.log("listening on port 3000")
})
