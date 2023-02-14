// Write your solution in this file!
const employee = {}
    employee.name = "Sam" 
    employee.streetAddress = "11 Broadway"
    function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
        const newEmployee = {...employee};
        newEmployee.streetAddress = value;
        return newEmployee;
      }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value
        return employee
    }
    function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key]
        return employee
    }
    