/** @type {import("./items").RequestHandler} */
export function post() {
  console.log("ok")
  return {
    status: 200,
    body: {
      success: true
    }
  }
}
