import Customer from "./Employee";

export function searchCustomers(){

    if(!localStorage['customers']){
        localStorage['customers']= '[]';
    }

    let customers = localStorage['customers'];

    customers = JSON.parse(customers);

    return customers;

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

export function removeCustomer(id:string){

    let customers = searchCustomers();

    let indice = customers.findIndex((customer:any) =>customer.id == id); // busca el dato en el array
    customers.splice(indice, 1); // elimina el dato del array
    localStorage['customers'] = JSON.stringify(customers);// actualiza el array

}

export function saveCustomer(customer:Customer){

    let customers = searchCustomers();

    if(customer.id){
        // editar
        let indice = customers.findIndex((c:Customer) =>c.id == customer.id); // busca el dato en el array
        customers[indice] = customer;
    } else {
        // nuevo
        customer.id = String(Math.round(Math.random()*10000));
        customers.push(customer);
    }

    localStorage['customers'] = JSON.stringify(customers);

}



export function searchCustomerById(id: string){


    let customers = searchCustomers();
    return customers.find((customer:any) => customer.id ==id);

}