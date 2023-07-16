import styles from './TaskStatusLabel.module.css'


interface TaskStatusLabelProps {
    badgeLabelValue: number;
    labelText: string;
}

export function TaskStatusLabel({ labelText, badgeLabelValue}: TaskStatusLabelProps) {
    return (
        <div className={styles.mainContainer}>
            <p>{labelText}</p>
            <p className={styles.badgeLabelValue}>{badgeLabelValue}</p>
        </div>
    );
}