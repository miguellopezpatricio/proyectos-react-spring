import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, documentsOutline, pencil, save, text, trashBin } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Supplier from './Supplier';
import { saveSupplier, searchSupplierById, searchSuppliers } from './SupplierApi';


const SupplierEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string; }>();

    const [Supplier, setSupplier] = useState<Supplier>({});

    const history = useHistory();

    useEffect(() => {
        search();

    }, []);

    const search = () => {

        if(id!== 'new'){

            let result = searchSupplierById(id);
            setSupplier(result);

        }

    }

    const save = () => {
        saveSupplier(Supplier);
        history.push('/page/Suppliers');
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
                    <IonTitle> {id ==='new' ? 'Agregar proveedor' : 'Editar proveedor'}</IonTitle>
                 <IonRow>
                     <IonCol>
                     <IonItem>
                        <IonLabel position="stacked">Nombre</IonLabel>
                        <IonInput onIonChange={e => Supplier.name = String(e.detail.value)} 
                        value={Supplier.name}> </IonInput>
                    </IonItem>      
                    
                     </IonCol>

                    
                 </IonRow>

                 <IonRow>

                   <IonCol>
     
                   <IonItem>
                        <IonLabel position="stacked">Email</IonLabel>
                        <IonInput onIonChange={e => Supplier.email = String(e.detail.value)} 
                         value={Supplier.email}> </IonInput>
                    </IonItem>
                   </IonCol>

                   <IonCol>
                   <IonItem>
                        <IonLabel position="stacked">Dirección</IonLabel>
                        <IonInput onIonChange={e => Supplier.address = String(e.detail.value)} 
                         value={Supplier.address}> </IonInput>
                    </IonItem>
               
                   </IonCol>
                   </IonRow>
                   <IonRow>
                   <IonCol>
                   <IonItem>
                        <IonLabel position="stacked">Teléfono</IonLabel>
                        <IonInput onIonChange={e => Supplier.phone = String(e.detail.value)} 
                         value={Supplier.phone}> </IonInput>
                    </IonItem>
               
                   </IonCol>
                   </IonRow>

                   <IonRow>
                   <IonCol>
                   <IonItem>
                        <IonLabel position="stacked">Contacto</IonLabel>
                        <IonInput onIonChange={e => Supplier.contact = String(e.detail.value)} 
                         value={Supplier.contact}> </IonInput>
                    </IonItem>
               
                   </IonCol>
                   </IonRow>


                   <IonRow>
                   <IonCol>
                   <IonItem>
                        <IonLabel position="stacked">Web</IonLabel>
                        <IonInput onIonChange={e => Supplier.web = String(e.detail.value)} 
                         value={Supplier.web}> </IonInput>
                    </IonItem>
               
                   </IonCol>
                   </IonRow>
                  
                   <IonCol>
                   <IonItem>
                        <IonButton onClick={save} color="success" fill="solid" slot='end' size='default'>
                            <IonIcon icon={checkmark} />Guardar</IonButton>
                    </IonItem>
                   </IonCol>


                   
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">{name}</IonTitle>
                        </IonToolbar>
                    </IonHeader>



                </IonCard>

              
            </IonContent>

        </IonPage>
    );
};

export default SupplierEdit;
