import styles from "./CreateTaskButton.module.css";
import { PlusCircle } from "phosphor-react";

interface CreateTaskButtonProps {
  onClick: () => void;
}

export function CreateTaskButton({ onClick }: CreateTaskButtonProps) {
  return (
    <button onClick={onClick} className={styles.createTaskButton}>
      <p className={styles.createText}>Create</p>
      <div className={styles.plusIconContainer}>
        <PlusCircle />
      </div>
    </button>
  );
}
