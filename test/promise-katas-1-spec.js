// DO NOT EDIT THIS FILE

const {
    returnPromise,
    returnTen,
    anError,
    happySad,
    myNameIs
} = require("../src/promise-katas-1");
const { expect } = require("chai");

describe('returnPromise', () => {
    it('returns a promise', (done) => {
        returnPromise()
            .then(() => done())
            .catch(() => done(new Error('The promise is expected to resolve')));
    })
});

describe('returnTen', () => {
    it('returns a promise that resolves to 10', (done) => {
        returnTen()
            .then(value => {
                expect(value).to.equal(10);
                done();
            })
            .catch(() => done(new Error('The promise is expected to resolve with 10!')));

    })

});

describe('anError', () => {
    it('returns a promise that returns "An error occurred" when it rejects', (done) => {
        anError()
            .catch(value => {
                expect(value).to.equal("An error occurred");
                done();
            });
    })
});

describe('happySad', () => {
    it('returns a promise that returns "happy" when x > 1', (done) => {
        const x = 2;
        happySad(x)
            .then(value => {
                expect(value).to.equal("happy");
                done();
            })
            .catch(() => done(new Error('The promise is expected to resolve with happy!')));
    })
    it('returns a promise that returns "sad" when x < 1', (done) => {
        const x = 0;
        happySad(x)
            .catch(value => {
                expect(value).to.equal("sad");
                done();
            });
    })
});

describe('myNameIs', () => {
    it('returns a promise that returns "My name is Romy" when it resolves', (done) => {
        const name = "Romy";
        myNameIs()
            .then(value => {
                expect(typeof value).to.equal("function");
                expect(value(name)).to.equal("My name is Romy");
                done();
            })
            .catch(() => done(new Error('The promise is expected to resolve with a function that returns "My name is Romy"!')));
    })
});
