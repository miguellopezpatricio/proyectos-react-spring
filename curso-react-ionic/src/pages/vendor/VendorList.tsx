import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil, trashBin } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Vendor from './Vendor';
import { removeVendor, saveVendor, searchVendors } from './VendorApi';


const VendorList: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [proveedores, setproveedores] = useState<Vendor[]>([]);
    const history = useHistory();

    useEffect(() => {
        search();

    }, [history.location.pathname]);

    const search = () => {
        let result = searchVendors();

        setproveedores(result);

    }

    const remove = (id:string)=> {
        removeVendor(id); // elimina el proveedor del localStorage
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
        saveVendor(ejemplo);
    }
*/
    const addVendor = () => {
        history.push('/page/Vendor/new');

    }


    const editVendor = (id:string) => {
        history.push('/page/Vendor/' + id);

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
                        <IonButton onClick={addVendor} color="primary" fill="solid" slot='end' size='default'>
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
                            <IonCol>Acciones</IonCol>

                        </IonRow>

                        {proveedores.map((proveedor:Vendor) =>

                            <IonRow>
                                <IonCol>{proveedor.firstname} {proveedor.lastname}</IonCol>
                                <IonCol>{proveedor.email}</IonCol>
                                <IonCol>{proveedor.phone}</IonCol>
                                <IonCol>{proveedor.address}</IonCol>
                                <IonCol>
                                    <IonButton color='primary' fill='clear'
                                    onClick={()=> editVendor(String(proveedor.id))}>
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

export default VendorList;
