import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'

export default Factory.define(User, ({ faker }) => {
  return {
    name: faker.name.fullName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    avatarUrl: Math.round(Math.random()) === 0 ? faker.internet.avatar() : null,
  }
}).build()
