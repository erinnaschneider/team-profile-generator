const Intern = require('../lib/Intern');

describe('testing Intern Class', ()=>{
    const int = new Intern('Erinn', 1, 'test@test.com', 'UNC')
    test('does this return an object', ()=>{
        expect(typeof(int)).toBe('object')
    })

    test('constructor and prototypes', ()=>{
        expect(int.name).toBe('Erinn')
        expect(int.id).toBe(1)
        expect(int.email).toBe('test@test.com')
        expect(int.school).toBe('UNC')
        expect(int.getName()).toBe('Erinn')
        expect(int.getId()).toBe(1)
        expect(int.getEmail()).toBe('test@test.com')
        expect(int.getSchool()).toBe('UNC')
        expect(int.getRole()).toBe('Intern')
    })
})