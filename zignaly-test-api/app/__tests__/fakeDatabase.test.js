const { fakeDatabase } = require('../database/fakeDatabase');
const phones = require('../database/fakePhonesData.json');

describe('fakeDatabase test', () => {
    it('should returns fake data', async () => {
        const fakeData = await fakeDatabase.findAll();
        expect(fakeData).toEqual(phones);
    });
});