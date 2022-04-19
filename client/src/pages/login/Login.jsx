import React, { useState } from 'react'
import StepPhoneEmail from '../steps/stepPhomeEmail/StepPhomeEmail'
import StepOtp from '../steps/stepOtp/StepOtp'


const stepsComponents = {
    1: StepPhoneEmail,
    2: StepOtp,
   
}

const Login = () => {
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

export default Login