import Head from "next/head"
import styles from '../styles/Layout.module.css'

export default function Layout({ children, title }) {
    return (
        <div className={styles.container}>

            <h3>
                {title}
                <hr />
            </h3>

            <nav>
                navbar
            </nav>

            <main>
                <h1> {children} </h1>
            </main>

            <footer>
                footer
            </footer>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Mi titulo por defecto',

}