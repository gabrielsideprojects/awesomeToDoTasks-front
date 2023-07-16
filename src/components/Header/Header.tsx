import styles from './Header.module.css'
//TODO: Substituir pel logo da lawnstarter
import igniteLogo from '../../assets/react.svg'

export function Header() {
    return (
        <header className={styles.header}>
        <img src={igniteLogo} alt={'Logotipo do LawnStarer TODO tasks'}/>
        </header>
    );
}