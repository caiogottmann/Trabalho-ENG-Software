import request from "supertest";
import app from "@/app";

describe("Testa as rotas relacionadas ao email", () => {
  it("Adicionar email", async () => {
    await request(app)
      .post("/Email")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDU3OTIwYjk0NzRhMTM4YTRlMzRkNTIiLCJBZG1pbiI6MSwiaWF0IjoxNjE2NDIwODYxLCJleHAiOjE2MTY1MDcyNjF9.GvjOuSOxdYmfkiiom1uKXIymgXP2qNKgd_WBeau-wOY"
      )
      .send({
        nome: "Nome Usuario",
        email: "nome.usuario@teste.com",
      })
      .expect(200);
  });

  it("Get Emails", async () => {
    await request(app)
      .get("/Email")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDU3OTIwYjk0NzRhMTM4YTRlMzRkNTIiLCJBZG1pbiI6MSwiaWF0IjoxNjE2NDIwODYxLCJleHAiOjE2MTY1MDcyNjF9.GvjOuSOxdYmfkiiom1uKXIymgXP2qNKgd_WBeau-wOY"
      )
      .expect(200);
  });

  it("Atualizar email", async () => {
    await request(app)
      .post("/Email/edit")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDU3OTIwYjk0NzRhMTM4YTRlMzRkNTIiLCJBZG1pbiI6MSwiaWF0IjoxNjE2NDIwODYxLCJleHAiOjE2MTY1MDcyNjF9.GvjOuSOxdYmfkiiom1uKXIymgXP2qNKgd_WBeau-wOY"
      )
      .send({
        nome: "Novo Nome Usuario",
        email: "nome.usuario@teste.com",
      })
      .expect(200);
  });

  it("Deletar email", async () => {
    await request(app)
      .delete("/Email/nome.usuario@teste.com")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDU3OTIwYjk0NzRhMTM4YTRlMzRkNTIiLCJBZG1pbiI6MSwiaWF0IjoxNjE2NDIwODYxLCJleHAiOjE2MTY1MDcyNjF9.GvjOuSOxdYmfkiiom1uKXIymgXP2qNKgd_WBeau-wOY"
      )
      .expect(200);
  });
});
