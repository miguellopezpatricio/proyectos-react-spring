import Employee from "./Employee";

export function searchEmployees(){

    if(!localStorage['employees']){
        localStorage['employees']= '[]';
    }

    let employees = localStorage['employees'];

    employees = JSON.parse(employees);

    return employees;

   /* const datosDeEjemplo = [
        {
            id: '1',
            firstname: 'Lucas',
            lastname: 'Pérez',
            email: 'lucas@mail.com',
            phone: '112233',
            address: 'c/SiempreViva,23'
        },
        {
            id: '2',
            firstname: 'María',
            lastname: 'López',
            email: 'maria@correo.org',
            phone: '554477',
            address: 'Roque,44'
        }
    ]; */
}

export function removeEmployee(id:string){

    let employees = searchEmployees();

    let indice = employees.findIndex((Employee:any) =>Employee.id == id); // busca el dato en el array
    employees.splice(indice, 1); // elimina el dato del array
    localStorage['employees'] = JSON.stringify(employees);// actualiza el array

}

export function saveEmployee(employee:Employee){

    let employees = searchEmployees();

    if(employee.id){
        // editar
        let indice = employees.findIndex((c:Employee) =>c.id == employee.id); // busca el dato en el array
        employees[indice] = employee;
    } else {
        // nuevo
        employee.id = String(Math.round(Math.random()*10000));
        employees.push(employee);
    }

    localStorage['employees'] = JSON.stringify(employees);

}



export function searchEmployeeById(id: string){


    let employees = searchEmployees();
    return employees.find((employee:any) => employee.id ==id);

}
