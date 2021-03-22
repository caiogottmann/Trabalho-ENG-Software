import request from "supertest";
import app from "@/app";

describe("Testa as rotas relacionadas ao Post", () => {
  it("Adicionar post", async () => {
    await request(app)
      .post("/Post")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDU3OTcyNjk0NzRhMTM4YTRlMzRkNTMiLCJBZG1pbiI6MCwiaWF0IjoxNjE2MzU3MjkxLCJleHAiOjE2MTY0NDM2OTF9.jYY1DdbznJup0dQqkPsaSYRy9HyWeMFsVtw4Jmc0GuU"
      )
      .send({
        titulo: "Titulo do Post",
        texto: "Conteudo do post",
        data: "2021-03-22",
        tag: ["tag"],
        creator: "605797269474a138a4e34d53",
      })
      .expect(200);
  });
  it("Get Posts", async () => {
    await request(app).get("/Post").expect(200);
  });
  it("Atualizar Post", async () => {
    var post = await request(app).get("/Post").expect(200);
    post = post.body.pop();
    await request(app)
      .post("/Post/edit")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDU3OTcyNjk0NzRhMTM4YTRlMzRkNTMiLCJBZG1pbiI6MCwiaWF0IjoxNjE2MzU3MjkxLCJleHAiOjE2MTY0NDM2OTF9.jYY1DdbznJup0dQqkPsaSYRy9HyWeMFsVtw4Jmc0GuU"
      )
      .send({
        postId: post.id,
        titulo: "Titulo do Post Atualizado",
        texto: "Conteudo do post Atualizado",
        data: "2021-03-23",
        tag: ["tags"],
        creator: "605797269474a138a4e34d53",
      })
      .expect(200);
  });
  it("Deletar Post", async () => {
    var post = await request(app).get("/Post").expect(200);
    post = post.body.pop();
    await request(app)
      .delete(`/Post/${post.id}`)
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDU3OTcyNjk0NzRhMTM4YTRlMzRkNTMiLCJBZG1pbiI6MCwiaWF0IjoxNjE2MzU3MjkxLCJleHAiOjE2MTY0NDM2OTF9.jYY1DdbznJup0dQqkPsaSYRy9HyWeMFsVtw4Jmc0GuU"
      )
      .expect(200);
  });
});
