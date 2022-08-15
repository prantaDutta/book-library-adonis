import Factory from '@ioc:Adonis/Lucid/Factory'
import Book from 'App/Models/Book'

export default Factory.define(Book, ({ faker }) => {
  return {
    title: faker.word.noun(),
    description: faker.lorem.paragraph(),
    author: faker.name.fullName(),
    releaseDate: new Date(faker.date.recent()),
  }
}).build()
