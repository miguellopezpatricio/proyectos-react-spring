import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, documentsOutline, pencil, save, text, trashBin } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Employee from './Employee';
import { saveEmployee, searchEmployeeById, searchEmployees } from './EmployeeApi';


const EmployeeEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string; }>();

    const [Employee, setEmployee] = useState<Employee>({});

    const history = useHistory();

    useEffect(() => {
        search();

    }, []);

    const search = () => {

        if(id!== 'new'){

            let result = searchEmployeeById(id);
            setEmployee(result);

        }

    }

    const save = () => {
        saveEmployee(Employee);
        history.push('/page/Employees');
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
                    <IonTitle> {id ==='new' ? 'Agregar cliente' : 'Editar cliente'}</IonTitle>
                 <IonRow>
                     <IonCol>
                     <IonItem>
                        <IonLabel position="stacked">Nombre</IonLabel>
                        <IonInput onIonChange={e => Employee.firstname = String(e.detail.value)} 
                        value={Employee.firstname}> </IonInput>
                    </IonItem>      
                    
                     </IonCol>

                     <IonCol>
                     <IonItem>
                        <IonLabel position="stacked">Apellido</IonLabel>
                        <IonInput onIonChange={e => Employee.lastname = String(e.detail.value)}  
                        value={Employee.lastname}> </IonInput>
                    </IonItem>  
                     </IonCol>
                 </IonRow>

                 <IonRow>

                   <IonCol>
     
                   <IonItem>
                        <IonLabel position="stacked">Email</IonLabel>
                        <IonInput onIonChange={e => Employee.email = String(e.detail.value)} 
                         value={Employee.email}> </IonInput>
                    </IonItem>
                   </IonCol>

                   <IonCol>
                   <IonItem>
                        <IonLabel position="stacked">Dirección</IonLabel>
                        <IonInput onIonChange={e => Employee.address = String(e.detail.value)} 
                         value={Employee.address}> </IonInput>
                    </IonItem>
               
                   </IonCol>
                   </IonRow>
                   <IonRow>
                   <IonCol>
                   <IonItem>
                        <IonLabel position="stacked">Teléfono</IonLabel>
                        <IonInput onIonChange={e => Employee.phone = String(e.detail.value)} 
                         value={Employee.phone}> </IonInput>
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

export default EmployeeEdit;
