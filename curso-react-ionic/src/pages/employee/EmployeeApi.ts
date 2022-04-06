import Employee from "./Employee";

export async function searchEmployees(){

    let url = process.env.REACT_APP_API + 'employees';

    let response = await fetch('http://localhost:8080/api/employees',{
        "method":'GET',
        "headers":{
            "Content-Type":'application/json'
        }

    })

    return await response.json();

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

export async function removeEmployee(id:string){

   
    
    let url = process.env.REACT_APP_API + 'employees/';

    await fetch('http://localhost:8080/api/employees/' + id,{
        "method":'DELETE',
        "headers":{
            "Content-Type":'application/json'
        }

    })
}

export async function saveEmployee(employee:Employee){

    let url = process.env.REACT_APP_API + 'employees';

        await fetch('http://localhost:8080/api/employees',{
        "method":'POST',
        "body":JSON.stringify(employee),
        "headers":{
            "Content-Type":'application/json'
        }

    })

}



export async function searchEmployeeById(id: string){

    let response = await fetch('http://localhost:8080/api/employees/' + id,{
        "method":'GET',
        "headers":{
            "Content-Type": 'application/json'
        }
    })
    return await response.json();
}
