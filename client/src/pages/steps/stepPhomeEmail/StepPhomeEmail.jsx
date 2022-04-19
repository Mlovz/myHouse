import React, { useState } from "react";
import styles from "./StepPhomeEmail.module.scss";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";

const steps = {
  phone: Phone,
  email: Email,
};

const StepPhomeEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = steps[type];

  return (
    <>
      <div className={styles.step__phone__email}>
        <div>
          <div className={styles.step__phone}>
            <button
              className={`${type === "phone" && styles.active}`}
              onClick={() => setType("phone")}
            >
              <img src="/images/phone-white.png" alt="" />
            </button>
            <button
              className={`${type === "email" && styles.active}`}
              onClick={() => setType("email")}
            >
              <img src="/images/mail-white.png" alt="" />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
};

export default StepPhomeEmail;
