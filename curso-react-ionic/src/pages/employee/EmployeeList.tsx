import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil, trashBin } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Customer from './Employee';
import { removeCustomer, saveCustomer, searchCustomers } from './EmployeeApi';


const CustomerList: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [clientes, setClientes] = useState<Customer[]>([]);
    const history = useHistory();

    useEffect(() => {
        search();

    }, [history.location.pathname]);

    const search = () => {
        let result = searchCustomers();

        setClientes(result);

    }

    const remove = (id:string)=> {
        removeCustomer(id); // elimina el cliente del localStorage
        search();// con esta función actualiza la vista de clientes

    }
/*
    const pruebaLocalStorage = () =>{
        const ejemplo = {
            id: '1',
            firstname: 'Lucas',
            lastname: 'Pérez',
            email: 'lucas@mail.com',
            phone: '112233',
            address: 'c/SiempreViva,23'
        }
        saveCustomer(ejemplo);
    }
*/
    const addCustomer = () => {
        history.push('/page/customer/new');

    }


    const editCustomer = (id:string) => {
        history.push('/page/customer/' + id);

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard>
                    <IonTitle>Gestión de Clientes</IonTitle>
                    <IonItem>
                        <IonButton onClick={addCustomer} color="primary" fill="solid" slot='end' size='default'>
                            <IonIcon icon={add} />Nuevo Cliente</IonButton>
                    </IonItem>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">{name}</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonGrid className='table'>
                        <IonRow>
                            <IonCol>Nombre</IonCol>
                            <IonCol>Email</IonCol>
                            <IonCol>Teléfono</IonCol>
                            <IonCol>Dirección</IonCol>
                            <IonCol>Acciones</IonCol>

                        </IonRow>

                        {clientes.map((cliente:Customer) =>

                            <IonRow>
                                <IonCol>{cliente.firstname} {cliente.lastname}</IonCol>
                                <IonCol>{cliente.email}</IonCol>
                                <IonCol>{cliente.phone}</IonCol>
                                <IonCol>{cliente.address}</IonCol>
                                <IonCol>
                                    <IonButton color='primary' fill='clear'
                                    onClick={()=> editCustomer(String(cliente.id))}>
                                        <IonIcon icon={pencil} slot="icon-only" />
                                    </IonButton>
                                    <IonButton color='danger' fill='clear'
                                    onClick={()=> remove(String(cliente.id))}>
                                        <IonIcon icon={trashBin} slot="icon-only" />
                                    </IonButton>
                                </IonCol>

                            </IonRow>



                        )}


                    </IonGrid>



                </IonCard>

         
            </IonContent>

        </IonPage>
    );
};

export default CustomerList;
