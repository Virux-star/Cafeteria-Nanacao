const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

    //prueba para GET /cafes

    test("GET /cafes devuelve 200 y un arreglo con al menos un café", async () => {
        const response = await request(server).get("/cafes");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    //prueba para delete

    test("DELETE /cafes/:id devuelve 404 si el café no existe", async () => {
        const response = await request(server)
            .delete("/cafes/999")
            .set("Authorization", "token");

        expect(response.statusCode).toBe(404);
    });

    //prueba para POST

    test("POST /cafes agrega un nuevo café y devuelve 201", async () => {
    const nuevoCafe = {
        id: 5,
        nombre: "Latte"
    };

    const response = await request(server)
        .post("/cafes")
        .send(nuevoCafe);

    expect(response.statusCode).toBe(201);
});

//prueba para PUT

test("PUT /cafes/:id devuelve 400 si los IDs son diferentes", async () => {
    const cafe = {
        id: 2,
        nombre: "Latte"
    };

    const response = await request(server)
        .put("/cafes/1")
        .send(cafe);

    expect(response.statusCode).toBe(400);
});

});