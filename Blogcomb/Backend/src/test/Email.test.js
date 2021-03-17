import request from "supertest";
import app from "@/app";

describe("Testa as rotas relacionadas ao email", () => {
  it("Adicionar email", async () => {
    return await request(app)
      .post("/Email")
      .send({
        nome: "Nome Usuario",
        email: "nome.usuario@teste.com",
      })
      .expect(200);
  });

  it("Get Emails", async () => {
    return await request(app).get("/Email").expect(200);
  });

  it("Atualizar email", async () => {
    return await request(app)
      .post("/Email/edit")
      .send({
        nome: "Novo Nome Usuario",
        email: "nome.usuario@teste.com",
      })
      .expect(200);
  });

  it("Deletar email", async () => {
    return await request(app)
      .delete("/Email/nome.usuario@teste.com")
      .expect(200);
  });
});
