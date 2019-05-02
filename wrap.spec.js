/*
The three steps in TDD are to:
- Create a failing spec
- Write minimal code to pass spec
- Repeat
*/

const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('Returns empty string if empty string was provided', () => {
        expect(wrap("", 10)).to.equal("");
    });
    it('Returns a string', () => {
        expect(wrap("", 1)).to.be.a('string');
    });
    it('Does not split words', () => {
        expect(wrap("Hello coders", 1)).to.equal("Hello\ncoders");
    });
    it('Creates the correct number of lines', () => {
        expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20))
            .to.equal('Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.')
    })

});