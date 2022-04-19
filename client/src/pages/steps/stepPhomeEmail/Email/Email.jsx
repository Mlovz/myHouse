import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import Card from "../../../../components/Card/Card";
import TextInput from "../../../../components/TextInput/TextInput";
import styles from "./Email.module.scss";

const Email = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.email}>
      <Card title="Введите почту" icon="mail">
        <div>
          <TextInput
            value={email}
            onChange={emailChange}
            placeholder="example@mail.com"
          />
        </div>
        <div>
          <Button onClick={onNext} txt="Далее" />
        </div>
      </Card>
    </div>
  );
};

export default Email;
