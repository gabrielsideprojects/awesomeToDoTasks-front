import styles from "./Header.module.css";
//TODO: Substituir pel logo da lawnstarter
import lawnStarterLogo from "../../assets/lawnStarterLogo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={lawnStarterLogo} alt={"LawnStarer Logo TODO tasks"} />
    </header>
  );
}
