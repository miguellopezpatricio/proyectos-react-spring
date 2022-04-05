import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil, trashBin } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Employee from './Employee';
import { removeEmployee, saveEmployee, searchEmployees } from './EmployeeApi';


const EmployeeList: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [empleados, setempleados] = useState<Employee[]>([]);
    const history = useHistory();

    useEffect(() => {
        search();

    }, [history.location.pathname]);

    const search = () => {
        let result = searchEmployees();

        setempleados(result);

    }

    const remove = (id:string)=> {
        removeEmployee(id); // elimina el empleado del localStorage
        search();// con esta función actualiza la vista de empleados

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
        saveEmployee(ejemplo);
    }
*/
    const addEmployee = () => {
        history.push('/page/employee/new');

    }


    const editEmployee = (id:string) => {
        history.push('/page/employee/' + id);

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
                    <IonTitle>Gestión de Empleados</IonTitle>
                    <IonItem>
                        <IonButton onClick={addEmployee} color="primary" fill="solid" slot='end' size='default'>
                            <IonIcon icon={add} />Nuevo Empleado</IonButton>
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
                            <IonCol>Salario</IonCol>
                            
                            <IonCol>Acciones</IonCol>

                        </IonRow>

                        {empleados.map((empleado:Employee) =>

                            <IonRow>
                                <IonCol>{empleado.firstname} {empleado.lastname}</IonCol>
                                <IonCol>{empleado.email}</IonCol>
                                <IonCol>{empleado.phone}</IonCol>
                                <IonCol>{empleado.address}</IonCol>
                                <IonCol>{empleado.salary}</IonCol>
                                
                                <IonCol>
                                    <IonButton color='primary' fill='clear'
                                    onClick={()=> editEmployee(String(empleado.id))}>
                                        <IonIcon icon={pencil} slot="icon-only" />
                                    </IonButton>
                                    <IonButton color='danger' fill='clear'
                                    onClick={()=> remove(String(empleado.id))}>
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

export default EmployeeList;
