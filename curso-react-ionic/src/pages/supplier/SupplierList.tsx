import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil, trashBin } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Supplier from './Supplier';
import { removeSupplier, saveSupplier, searchSuppliers } from './SupplierApi';


const SupplierList: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [proveedores, setproveedores] = useState<Supplier[]>([]);
    const history = useHistory();

    useEffect(() => {
        search();

    }, [history.location.pathname]);

    const search = () => {
        let result = searchSuppliers();

        setproveedores(result);

    }

    const remove = (id:string)=> {
        removeSupplier(id); // elimina el proveedor del localStorage
        search();// con esta función actualiza la vista de proveedores

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
        saveSupplier(ejemplo);
    }
*/
    const addSupplier = () => {
        history.push('/page/Supplier/new');

    }


    const editSupplier = (id:string) => {
        history.push('/page/Supplier/' + id);

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
                    <IonTitle>Gestión de proveedores</IonTitle>
                    <IonItem>
                        <IonButton onClick={addSupplier} color="primary" fill="solid" slot='end' size='default'>
                            <IonIcon icon={add} />Nuevo Proveedor</IonButton>
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
                            <IonCol>Web</IonCol>
                            
                            <IonCol>Acciones</IonCol>

                        </IonRow>

                        {proveedores.map((proveedor:Supplier) =>

                            <IonRow>
                                <IonCol>{proveedor.name}</IonCol>
                                <IonCol>{proveedor.email}</IonCol>
                                <IonCol>{proveedor.phone}</IonCol>
                                <IonCol>{proveedor.address}</IonCol>
                                <IonCol>{proveedor.web}</IonCol>
                                
                                <IonCol>
                                    <IonButton color='primary' fill='clear'
                                    onClick={()=> editSupplier(String(proveedor.id))}>
                                        <IonIcon icon={pencil} slot="icon-only" />
                                    </IonButton>
                                    <IonButton color='danger' fill='clear'
                                    onClick={()=> remove(String(proveedor.id))}>
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

export default SupplierList;
