import styles from "../styles/Layout.module.css"
import Nav from "./Nav.js";
function Layout({children}){


    return (
        <div className={styles.container}>
            <Nav/>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )

}

export default Layout;