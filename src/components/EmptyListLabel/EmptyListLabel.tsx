import styles from "./EmptyListLabel.module.css";
import { Clipboard } from "phosphor-react";

export function EmptyListLabel() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainIcon}>
        <Clipboard size={50} />
      </div>
      <h4>You do not have tasks registereds yet</h4>
      <small>Create tasks and organize your TODO itens </small>
    </div>
  );
}
