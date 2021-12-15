const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('testing Enginner Class', ()=>{
    const eng = new Engineer('Erinn', 1, 'test@test.com')
    test('does this return an object', ()=>{
        expect(typeof(eng)).toBe('object')
    })

    test('constructor and prototypes', ()=>{
        expect(eng.name).toBe('Erinn')
        expect(eng.id).toBe(1)
        expect(eng.email).toBe('test@test.com')
        expect(eng.getName()).toBe('Erinn')
        expect(eng.getId()).toBe(1)
        expect(eng.getEmail()).toBe('test@test.com')
        expect(eng.getRole()).toBe('Engineer')
    })
})