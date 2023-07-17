import styles from "./TaskBox.module.css";
import { Check, Trash } from "phosphor-react";

interface TaskBoxProps {
  text: string;
  isCompleted: boolean;
  onTrashIconPress: () => void;
}

export function TaskBox({ text, isCompleted, onTrashIconPress }: TaskBoxProps) {
  return (
    <div className={styles.mainContainer}>
      {isCompleted ? (
        <>
          <button className={styles.radioButtonSelected}>
            <Check color="white" />
          </button>
          <label className={styles.textLabel}>{text}</label>
        </>
      ) : (
        <>
          <button className={styles.radioButtonUnselected} />
          <label htmlFor="regular">{text}</label>
        </>
      )}

      <button onClick={onTrashIconPress} className={styles.trashButton}>
        <Trash color="#8d8d99" />
      </button>
    </div>
  );
}
