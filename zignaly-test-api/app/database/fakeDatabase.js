const phones = require('./fakePhonesData.json');

const fakeDatabase = {
    findAll: () => {
        return Promise.resolve(phones);
    }
};

module.exports = { fakeDatabase };
