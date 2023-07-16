import styles from './TaskBox.module.css'
import { Check , Trash} from 'phosphor-react'

interface TaskBoxProps {
    text: string;
    isCompleted: boolean;
}

export function TaskBox({ text, isCompleted}: TaskBoxProps) {
    return (
        <div className={styles.mainContainer}>
            {
                isCompleted ? <button className={styles.radioButtonUnselected}/> : 
                <button className={styles.radioButtonSelected}>
                    <Check color='white' />
                </button>
            }
             <label   htmlFor="regular">{text}</label>
             <button className={styles.trashButton}>
              <Trash color='#8d8d99'/>
            </button>
        </div>
    );
}