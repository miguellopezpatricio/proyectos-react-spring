import Supplier from "./Supplier";

export async function searchSuppliers(){

   
    let url = process.env.REACT_APP_API + 'suppliers';

    let response = await fetch('http://localhost:8080/api/suppliers',{
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

export async function removeSupplier(id:string){

    let url = process.env.REACT_APP_API + 'suppliers/';

    await fetch('http://localhost:8080/api/suppliers/' + id,{
        "method":'DELETE',
        "headers":{
            "Content-Type":'application/json'
        }

    })

}

export async function saveSupplier(supplier:Supplier){



    let url = process.env.REACT_APP_API + 'suppliers';

        await fetch('http://localhost:8080/api/suppliers',{
        "method":'POST',
        "body":JSON.stringify(supplier),
        "headers":{
            "Content-Type":'application/json'
        }

    })
}



export async function searchSupplierById(id: string){


    let response = await fetch('http://localhost:8080/api/suppliers/' + id,{
        "method":'GET',
        "headers":{
            "Content-Type": 'application/json'
        }
    })
    return await response.json();

}
