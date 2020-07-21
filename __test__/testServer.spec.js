const app = require("../src/server/server");
const supertest = require("supertest");
const request = supertest(app);

test("Test the endpoint", async (done) => {
  const res = await request.get("/data");
  expect(res.status).toBe(200);
  done();
});
