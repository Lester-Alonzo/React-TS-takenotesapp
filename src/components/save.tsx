import styles from '../save.module.css'

interface porps {
    save: () => void
}

export default function Save({save}: porps) {
    return <button className={styles.bnt} onClick={save} title="Guardar">💾</button>
}