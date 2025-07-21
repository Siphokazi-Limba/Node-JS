const db = require('./db');

async function getAllEmployees() {
    const [rows] = await db.query('SELECT * FROM employees');
    console.log('All Employees:', rows);
}

async function getEmployeeById(id) {
    const [rows] = await db.query('SELECT * FROM employees WHERE employee_id = ?', [id]);
    console.log('Employee:', rows[0]);
}


async function addEmployee() {
    await db.query(
        'INSERT INTO employees (first_name, last_name, email, phone_number,  department, salary) VALUES (?, ?, ?, ?, ?, ?)'
     );
    await getAllEmployees();
}
async function deleteEmployee(id) {
  await db.query('DELETE FROM employees WHERE employee_id = ?', [id]);
  await getAllEmployees();
}


async function updateEmployee(id, first, last, role, salary) {
  await db.query(
    'UPDATE employees SET first_name = ?, last_name = ?, role = ?, salary = ? WHERE employee_id = ?',
    [first, last, role, salary, id]
  );
  await getEmployeeById(id);
}

getAllEmployees();
// addEmployee('Lerato', 'Dlamini', 'Security', 5500.00);
// deleteEmployee(3);
// updateEmployee(2, 'Thandi', 'Moyo', 'Manager', 9500.00);
// getEmployeeById(1);



