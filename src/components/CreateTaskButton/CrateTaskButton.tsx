import styles from './CrateTaskButton.module.css'
import { PlusCircle } from 'phosphor-react'


export function CreateTaskButton() {
    return (
        <div className={styles.createTaskButton}>
               <p>Create</p>
            <div className={styles.plusIconContainer}>
               <PlusCircle/>
            </div>
        </div>
    );
}