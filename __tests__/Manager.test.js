const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

describe('testing Manager Class', ()=>{
    const mngr = new Manager('Erinn', 1, 'test@test.com', '111')
    test('does this return an object', ()=>{
        expect(typeof(mngr)).toBe('object')
    })

    test('constructor and prototypes', ()=>{
        expect(mngr.name).toBe('Erinn')
        expect(mngr.id).toBe(1)
        expect(mngr.email).toBe('test@test.com')
        expect(mngr.officeNumber).toBe('111')
        expect(mngr.getName()).toBe('Erinn')
        expect(mngr.getId()).toBe(1)
        expect(mngr.getEmail()).toBe('test@test.com')
        expect(mngr.getOfficeNumber()).toBe('111')
        expect(mngr.getRole()).toBe('Manager')
    })
})