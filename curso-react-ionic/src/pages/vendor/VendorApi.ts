import Vendor from "./Vendor";

export function searchVendors(){

    if(!localStorage['Vendors']){
        localStorage['Vendors']= '[]';
    }

    let Vendors = localStorage['Vendors'];

    Vendors = JSON.parse(Vendors);

    return Vendors;

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

export function removeVendor(id:string){

    let Vendors = searchVendors();

    let indice = Vendors.findIndex((Vendor:any) =>Vendor.id == id); // busca el dato en el array
    Vendors.splice(indice, 1); // elimina el dato del array
    localStorage['Vendors'] = JSON.stringify(Vendors);// actualiza el array

}

export function saveVendor(Vendor:Vendor){

    let Vendors = searchVendors();

    if(Vendor.id){
        // editar
        let indice = Vendors.findIndex((c:Vendor) =>c.id == Vendor.id); // busca el dato en el array
        Vendors[indice] = Vendor;
    } else {
        // nuevo
        Vendor.id = String(Math.round(Math.random()*10000));
        Vendors.push(Vendor);
    }

    localStorage['Vendors'] = JSON.stringify(Vendors);

}



export function searchVendorById(id: string){


    let Vendors = searchVendors();
    return Vendors.find((Vendor:any) => Vendor.id ==id);

}
