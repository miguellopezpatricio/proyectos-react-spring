import Supplier from "./Supplier";

export function searchSuppliers(){

    if(!localStorage['Suppliers']){
        localStorage['Suppliers']= '[]';
    }

    let Suppliers = localStorage['Suppliers'];

    Suppliers = JSON.parse(Suppliers);

    return Suppliers;

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

export function removeSupplier(id:string){

    let Suppliers = searchSuppliers();

    let indice = Suppliers.findIndex((Supplier:any) =>Supplier.id == id); // busca el dato en el array
    Suppliers.splice(indice, 1); // elimina el dato del array
    localStorage['Suppliers'] = JSON.stringify(Suppliers);// actualiza el array

}

export function saveSupplier(Supplier:Supplier){

    let Suppliers = searchSuppliers();

    if(Supplier.id){
        // editar
        let indice = Suppliers.findIndex((c:Supplier) =>c.id == Supplier.id); // busca el dato en el array
        Suppliers[indice] = Supplier;
    } else {
        // nuevo
        Supplier.id = String(Math.round(Math.random()*10000));
        Suppliers.push(Supplier);
    }

    localStorage['Suppliers'] = JSON.stringify(Suppliers);

}



export function searchSupplierById(id: string){


    let Suppliers = searchSuppliers();
    return Suppliers.find((Supplier:any) => Supplier.id ==id);

}
