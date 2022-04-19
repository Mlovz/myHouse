import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <div className="container">
                <nav className={styles.nav__menu}>
                    <Link to='/' className={styles.nav__logo}>
                        <img src="/images/logo.png" alt="" />
                        <span>Clubhouse</span>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Navigation
