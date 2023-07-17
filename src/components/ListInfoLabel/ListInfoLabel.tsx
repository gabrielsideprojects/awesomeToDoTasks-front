import styles from "./ListInfoLabel.module.css";

interface ListInfoLabelProps {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  refetch?: () => void;
}

export function ListInfoLabel({
  title,
  subtitle,
  icon,
  refetch,
}: ListInfoLabelProps) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainIcon}>{icon}</div>
      <h4>{title}</h4>

      <span className={styles.refetchButtonWithRefetchFn} onClick={refetch}>
        {subtitle}
      </span>
    </div>
  );
}
