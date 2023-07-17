import styles from "./TaskBox.module.css";
import { Check, Trash } from "phosphor-react";

interface TaskBoxProps {
  text: string;
  isCompleted: boolean;
  onTrashIconPress: () => void;
  onMarkTaskAsCompletedPress: () => void;
}

export function TaskBox({
  text,
  isCompleted,
  onTrashIconPress,
  onMarkTaskAsCompletedPress,
}: TaskBoxProps) {
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
          <button
            onClick={onMarkTaskAsCompletedPress}
            className={styles.radioButtonUnselected}
          />
          <label htmlFor="regular">{text}</label>
        </>
      )}

      <button onClick={onTrashIconPress} className={styles.trashButton}>
        <Trash color="white" />
      </button>
    </div>
  );
}
