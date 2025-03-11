const employees = [
    { id: 1, name: 'Leo Acum', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Niko Malek', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Seba Simpson', age: 35, department: 'Finance', salary: 60000 },
];

function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Salario Total: $${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index)=> `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p> boton de hr`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;

}

function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} Boton final</p>`;

    }else{
        document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con este ID';
    }
}