
import React from 'react';
import { IonIcon, IonItem, IonItemOptions, IonItemOption, IonItemSliding, IonLabel } from '@ionic/react';
import { ellipseOutline, chevronForwardOutline, trash, eye, addCircleOutline, star } from 'ionicons/icons';
import { useHistory } from 'react-router';

interface TaskProps {
    id: number;
    name: string;
    onDelete: (id: number) => void; 
    onAddPriority: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ id, name, onDelete, onAddPriority }) => {
    const history = useHistory();

    const handleTaskClick = () => {
        history.push(`edit/${id}`);
    };
    
    const handleViewClick = () => {
        history.push(`view/${id}`);
    };

    const handleDeleteClick = () => {
        onDelete(id);
    };

    const handleAddPriorityClick = () => {
        onAddPriority(id); 
    };

    return (
        <IonItemSliding>
            <IonItem button={true} onClick={handleTaskClick} className='task-align'>
                <IonIcon icon={ellipseOutline} style={{ paddingRight: 10 }} />
                <IonLabel>{name}</IonLabel>
                <IonIcon icon={chevronForwardOutline} />
            </IonItem>
            <IonItemOptions slot="end">
                <IonItemOption color="success" expandable={true} onClick={handleAddPriorityClick}>
                    <IonIcon slot="icon-only" icon={addCircleOutline}></IonIcon>
                </IonItemOption>
                <IonItemOption onClick={handleViewClick} color="primary" expandable={true}>
                    <IonIcon slot="icon-only" icon={eye}></IonIcon>
                </IonItemOption>
                <IonItemOption color="danger" expandable={true} onClick={handleDeleteClick}>
                    <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    );
};

export default Task;
