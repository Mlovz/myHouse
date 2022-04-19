import React from 'react'
import styles from './TextInput.module.scss'

const TextInput = (props) => {
    return (
        <>
            <input className={styles.input} type="text" {...props} />
        </>
    )
}

export default TextInput
