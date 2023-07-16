import styles from './AddTaskInput.module.css'


interface AddTaskInputProps {
    onChangeText?: ()=> void;
}

export function AddTaskInput({onChangeText}: AddTaskInputProps) {
    return (
        <input type={"text"} onChange={onChangeText} className={styles.input} placeholder='Add a new task'/>
    );
}