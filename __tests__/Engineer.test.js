const Engineer = require('../lib/Engineer');

describe('testing Engineer Class', ()=>{
    const eng = new Engineer('Erinn', 1, 'test@test.com', 'me@github')
    test('does this return an object', ()=>{
        expect(typeof(eng)).toBe('object')
    })

    test('constructor and prototypes', ()=>{
        expect(eng.name).toBe('Erinn')
        expect(eng.id).toBe(1)
        expect(eng.email).toBe('test@test.com')
        expect(eng.github).toBe('me@github')
        expect(eng.getName()).toBe('Erinn')
        expect(eng.getId()).toBe(1)
        expect(eng.getEmail()).toBe('test@test.com')
        expect(eng.getGithub()).toBe('me@github')
        expect(eng.getRole()).toBe('Engineer')
    })
})