import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import styles from './Home.module.scss'

const HomePage = () => {
    const history = useHistory()

    const startRegister = () => {
        history.push('/authenticate')
    }
    
    return (
        <div className={styles.home}>
            <div className={styles.home__card}>
                <Card title='Добро пожаловать в Clubhouse!' icon='logo'>
                    <p>
                    Я усердно работал, чтобы подготовить клуб для
                    всех!  постепенно добавляли людей, чтобы
                    убедиться, что ничего не сломается:)
                    </p>

                    <Link to className={`mg_top ${styles.home__card__btn}`}>
                        <Button onClick={startRegister} txt='Поехали'/>
                    </Link>

                    <div className={styles.home__card__link}>
                        <span>У вас есть аккаунт?</span>
                        <Link to='/login'>
                            Войти ?
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default HomePage
