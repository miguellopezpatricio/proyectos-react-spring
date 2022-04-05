import Customer from "./Customer";

export function searchCustomers(){

    if(!localStorage['Customers']){
        localStorage['Customers']= '[]';
    }

    let Customers = localStorage['Customers'];

    Customers = JSON.parse(Customers);

    return Customers;

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

    let Customers = searchCustomers();

    let indice = Customers.findIndex((Customer:any) =>Customer.id == id); // busca el dato en el array
    Customers.splice(indice, 1); // elimina el dato del array
    localStorage['Customers'] = JSON.stringify(Customers);// actualiza el array

}

export function saveCustomer(Customer:Customer){

    let Customers = searchCustomers();

    if(Customer.id){
        // editar
        let indice = Customers.findIndex((c:Customer) =>c.id == Customer.id); // busca el dato en el array
        Customers[indice] = Customer;
    } else {
        // nuevo
        Customer.id = String(Math.round(Math.random()*10000));
        Customers.push(Customer);
    }

    localStorage['Customers'] = JSON.stringify(Customers);

}



export function searchCustomerById(id: string){


    let Customers = searchCustomers();
    return Customers.find((Customer:any) => Customer.id ==id);

}
