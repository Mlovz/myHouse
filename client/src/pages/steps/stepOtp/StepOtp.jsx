import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import TextInput from "../../../components/TextInput/TextInput";
import { verifyOtp } from "../../../http";
import styles from "./StepOtp.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../../store/slices/authSlice";

const StepOtp = () => {
  const [otp, setOtp] = useState("");
  const { phone, hash } = useSelector((state) => state.auth.otp);
  const dispatch = useDispatch();
  const phoneChange = (e) => {
    setOtp(e.target.value);
  };

  const submit = async () => {
    try {
      const { data } = await verifyOtp({ otp, phone, hash });
      console.log(data);
      dispatch(setAuth({ user: data.user, token: data.accessToken }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.otp}>
      <Card title="Введите 4-ый код" icon="lock-emoji">
        <div>
          <TextInput
            value={otp}
            onChange={phoneChange}
            placeholder="Введите 4-ый код"
          />
        </div>
        <div>
          <Button txt="Далее" onClick={submit} />
        </div>
      </Card>
    </div>
  );
};

export default StepOtp;
