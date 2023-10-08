import { faker } from '@faker-js/faker'

const Article = [
  {
    image: `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`,
    name: faker.hacker.ingverb(),
    description: faker.company.bs(),
    star: '1',
    name1: faker.name.lastName(),
  },
  {
    image: `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`,
    name: faker.hacker.ingverb(),
    description: faker.company.bs(),
    star: '2',
    name1: faker.name.lastName(),
  },
  {
    image: `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`,
    name: faker.hacker.ingverb(),
    description: faker.company.bs(),
    star: '3',
    name1: faker.name.lastName(),
  },
];
export default Article;
