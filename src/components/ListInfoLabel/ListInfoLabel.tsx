import styles from "./ListInfoLabel.module.css";

interface ListInfoLabelProps {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

export function ListInfoLabel({ title, subtitle, icon }: ListInfoLabelProps) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainIcon}>{icon}</div>
      <h4>{title}</h4>
      <small>{subtitle} </small>
    </div>
  );
}
