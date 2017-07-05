const db = require('./index');
const faker = require('faker');

db.query(`
  INSERT INTO posts (title)
  VALUES ($<title>)
`, {
  title: faker.hacker.noun()  
})
  .then(() => {
    console.log('🔨 Created a post!');
    process.exit();
  })
