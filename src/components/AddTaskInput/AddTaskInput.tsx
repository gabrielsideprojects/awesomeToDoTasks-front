import styles from './AddTaskInput.module.css'


interface AddTaskInputProps {
    onChangeText?: ()=> void;
}

export function AddTaskInput({onChangeText}: AddTaskInputProps) {
    return (
        <input maxLength={100}  type={"text"} onChange={onChangeText} className={styles.addTaskInput} placeholder='Add a new task'/>
    );
}