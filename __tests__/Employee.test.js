const Employee = require('../lib/Employee');

describe('testing Employee Class', ()=>{
    const emp= new Employee('Erinn', 1, 'test@test.com')
    test('does this return an object', ()=>{
        expect(typeof(emp)).toBe('object')
    })

    test('constructor and prototypes', ()=>{
        expect(emp.name).toBe('Erinn')
        expect(emp.id).toBe(1)
        expect(emp.email).toBe('test@test.com')
        expect(emp.getName()).toBe('Erinn')
        expect(emp.getId()).toBe(1)
        expect(emp.getEmail()).toBe('test@test.com')
        expect(emp.getRole()).toBe('Employee')
    })
})