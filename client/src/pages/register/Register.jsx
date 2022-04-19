import React, { useState } from 'react'
import StepPhoneEmail from '../steps/stepPhomeEmail/StepPhomeEmail'
import StepOtp from '../steps/stepOtp/StepOtp'
import StepName from '../steps/stepName/StepName'
import StepAvatar from '../steps/stepAvatar/StepAvatar'
import StepUserName from '../steps/stepUserName/StepUserName'

const stepsComponents = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUserName
}

const Register = () => {
    const [step, setStep] = useState(1)
    const Step = stepsComponents[step]
    
    const onNext = () => {
        setStep((prev) => prev + 1)
    }
    
    return (
        <div>
            <Step onNext={onNext}/>
        </div>
    )
}

export default Register
