import React, { useState } from 'react'
import styles from './Authenticate.module.scss'
import StepPhoneEmail from '../steps/stepPhomeEmail/StepPhomeEmail'
import StepOtp from '../steps/stepOtp/StepOtp'


const stepsComponents = {
    1: StepPhoneEmail,
    2: StepOtp,
   
}

const Authenticate = () => {
    const [step, setStep] = useState(1)
    const Step = stepsComponents[step]
    
    const onNext = () => {
        setStep((prev) => prev + 1)
    }
    
    return (
        <div className={styles.authenticate}>
            <Step onNext={onNext}/>
        </div>
    )
}

export default Authenticate