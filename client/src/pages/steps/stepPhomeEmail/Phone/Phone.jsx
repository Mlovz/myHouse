import React, { useState } from "react";
import styles from "./Phone.module.scss";
import Card from "../../../../components/Card/Card";
import Button from "../../../../components/Button/Button";
import TextInput from "../../../../components/TextInput/TextInput";
import { sendOtp } from "../../../../http";
import { setOpt } from "../../../../store/slices/authSlice";
import { useDispatch } from "react-redux";

const Phone = ({ onNext }) => {
  const [phoneNum, setPhoneNum] = useState("");
  const dispatch = useDispatch();
  const phoneChange = (e) => {
    setPhoneNum(e.target.value);
  };

  const submit = async () => {
    try {
      const { data } = await sendOtp({ phone: phoneNum });
      console.log(data);
      dispatch(setOpt({ phone: data.phone, hash: data.hash }));
      onNext();
    } catch (err) {}
  };

  return (
    <div className={styles.phone}>
      <Card title="Введите номер телефона" icon="phone">
        <div>
          <TextInput
            value={phoneNum}
            onChange={phoneChange}
            placeholder="+7(922)-764-47-23"
          />
        </div>
        <div>
          <Button onClick={submit} txt="Далее" />
        </div>
      </Card>
    </div>
  );
};

export default Phone;
