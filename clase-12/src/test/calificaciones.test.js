import generator from "./generator.js"
import { expect } from "chai"
import supertest from "supertest"

//siempre declaramos la ip
const path = supertest("http://127.0.0.1:8080")

describe('Test con Faker', () => {
    
    it('Obtener datos con Faker', () => {
        const data = generator.randomData()
        expect(data)
    })

    describe('Testeo endpoints', () => {
        it('GET', async () => {
            const response = await path.get("/calificaciones")
            // console.log(response._body) -> opcional ver data
            expect(response.status).to.eq(201)
        })

        it('POST', async () => {
            const data = generator.randomData()
            //cambiamos el verbo
            const response = await path.post("/calificaciones").send(data)
            expect(response.status).to.eq(200)
            const newData = response.body
            expect(newData).to.include.keys("nombre", "nota", "curso")
        })
    })
})