const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const Employee = require('../lib/Employee');
const employee = new Employee ('holden', '7429', 'holdenatkinson@gmail.com');

test('test for constructor values of employee object', () => {
    expect(employee.name).toBe('holden');
    expect(employee.id).toBe('7429');
    expect(employee.email).toBe('holdenatkinson@gmail.com');
});

test('test for getName() method.', () => {
    expect(employee.getName).toBe('holden');
});

test('test for getId() method.', () => {
    expect(employee.getId).toBe('7429');
});

test('test for getEmail() method.', () => {
    expect(employee.getEmail).toBe('holdenatkinson@gmail.com');
});

test('test for getRole() method.', () => {
    expect(employee.getRole).toBe('Employee');
});