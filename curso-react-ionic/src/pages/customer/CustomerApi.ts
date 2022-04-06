import Customer from "./Customer";

export async function searchCustomers(){

    let url = process.env.REACT_APP_API + 'customers';

    let response = await fetch('http://localhost:8080/api/customers',{
        "method":'GET',
        "headers":{
            "Content-Type":'application/json'
        }

    })

    return await response.json();



/*
// PRUEBA INICIAL CON DATOS EN localStorage

    if(!localStorage['Customers']){
        localStorage['Customers']= '[]';
    }

    let Customers = localStorage['Customers'];

    Customers = JSON.parse(Customers);

    return Customers;
*/
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

export async function removeCustomer(id:string){

  
    let url = process.env.REACT_APP_API + 'customers/';

    await fetch('http://localhost:8080/api/customers/' + id,{
        "method":'DELETE',
        "headers":{
            "Content-Type":'application/json'
        }

    })

  
  
  
  /*  let customers = await searchCustomers();

    let indice = customers.findIndex((customer:Customer) =>customer.id === id); // busca el dato en el array
    customers.splice(indice, 1); // elimina el dato del array
    localStorage['customers'] = JSON.stringify(customers);// actualiza el array
*/
}

export async function saveCustomer(customer:Customer){



    let url = process.env.REACT_APP_API + 'customers';

        await fetch('http://localhost:8080/api/customers',{
        "method":'POST',
        "body":JSON.stringify(customer),
        "headers":{
            "Content-Type":'application/json'
        }

    })

 


    /*
    let customers = await searchCustomers();

    if(customer.id){
        // editar
        let indice = customers.findIndex((c:Customer) =>c.id === customer.id); // busca el dato en el array
        customers[indice] = customer;
    } else {
        // nuevo
        customer.id = String(Math.round(Math.random()*10000));
        customers.push(customer);
    }

    localStorage['customers'] = JSON.stringify(customers);
*/
} 



export async function searchCustomerById(id: string){


    let response = await fetch('http://localhost:8080/api/customers/' + id,{
        "method":'GET',
        "headers":{
            "Content-Type": 'application/json'
        }
    })
    return await response.json();

}
