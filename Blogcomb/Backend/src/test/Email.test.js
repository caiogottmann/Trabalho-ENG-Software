import request from "supertest";
import app from "@/app";

describe("Testa as rotas relacionadas ao email", () => {
  it("Adicionar email", async () => {
    await request(app)
      .post("/Email")
      .send({
        nome: "Nome Usuario",
        email: "nome.usuario@teste.com",
      })
      .expect(200);
  });

  it("Get Emails", async () => {
    await request(app).get("/Email").expect(200);
  });

  it("Atualizar email", async () => {
    await request(app)
      .post("/Email/edit")
      .send({
        nome: "Novo Nome Usuario",
        email: "nome.usuario@teste.com",
      })
      .expect(200);
  });

  it("Deletar email", async () => {
    await request(app).delete("/Email/nome.usuario@teste.com").expect(200);
  });
});
