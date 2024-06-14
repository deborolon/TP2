import { faker } from "@faker-js/faker"

const randomData = () => ({
    nombre: faker.person.fullName(),
    nota: faker.number.int({ min: 1, max: 10 }),
    curso: faker.string.alphanumeric(2)
})

export default {
    randomData
}