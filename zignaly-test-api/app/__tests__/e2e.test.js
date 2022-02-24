const supertest  = require('supertest');
const app = require('../../server');
const phones = require('../database/fakePhonesData.json');

describe('Phones Endpoints', () => {
  const request = supertest(app);

  it('should return message', async () => {
    await request.get('/')
      .expect(200)
      .then((response) => {
        const { message } = response.body;
        expect(message).toBeDefined();
        expect(message).toBe('Welcome to Zignaly Test application.');
      });
  });


  it('should return phones', async () => {
    await request.get('/api/phones')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(phones);
      })
  })
});