const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

    test("GET /cafes devuelve 200 y un arreglo con al menos un café", async () => {
        const response = await request(server).get("/cafes");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

});