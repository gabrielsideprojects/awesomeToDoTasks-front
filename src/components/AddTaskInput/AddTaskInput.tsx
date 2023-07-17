import styles from "./AddTaskInput.module.css";

interface AddTaskInputProps {
  onChangeText: (value: string) => void;
  value: string;
}

export function AddTaskInput({ onChangeText, value }: AddTaskInputProps) {
  return (
    <input
      maxLength={100}
      value={value}
      type={"text"}
      onChange={(e) => onChangeText(e.target.value)}
      className={styles.addTaskInput}
      placeholder="Add a new task"
    />
  );
}
