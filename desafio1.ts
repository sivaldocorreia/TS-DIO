/* Desafio 1 - como rodar este código em Typescript sem erros

let employee = {};
employee.code = 10;
employee.name = "John";
*/

//Solution 1

let employee: { code: number, name: string } = {
    code: 10,
    name: 'Paul'
}

//Solution 2

interface Employee {
    code: number,
    name: string
}

//Solution 3

const employeeObj = {} as Employee
employeeObj.code = 10,
employeeObj.name = 'Paul'

const employeeObj2: Employee = {
    code: 6,
    name: 'Mary'
}

