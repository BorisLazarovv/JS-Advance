const { expect } = require('chai');
const rgbToHexColor = require('./RGBtoHex');

describe('RGBtoHex', () => {
    it('coverts balck to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    });
    it('coverts white to hex', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000')
    });
    it('coverts red to hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00')
    });
    it('coverts green to hex', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF')
    });
    it('coverts blue to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    });
    it('returens undefined for string params', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.be.undefined;
    });
    it('returens undefined for negative values', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });
    it('returens undefined for values >255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });
    it('convert (151,104,172) to hex', () => {
        expect(rgbToHexColor(151, 104, 172)).to.equal('#9768AC');
    });
    it('convert (42,,173,170) to hex', () => {
        expect(rgbToHexColor(42, 1173, 170)).to.equal('#2AADAA');
    });
})