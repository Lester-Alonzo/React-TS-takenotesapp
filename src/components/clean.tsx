import styles from '../clean.module.css'
interface props {
    clean: () => void
}
export default function Clean({ clean }: props) {
    return <button className={styles.bnt} onClick={clean} title="Eliminar todo">🧹</button>
}