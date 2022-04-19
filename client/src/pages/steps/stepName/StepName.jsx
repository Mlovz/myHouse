import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import TextInput from "../../../components/TextInput/TextInput";

import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/slices/activateSlice";

const StepName = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.activate);
  const [fullname, setFullName] = useState(name);

  const nextStep = () => {
    if (!fullname) {
      return;
    }
    dispatch(setName(fullname));

    onNext();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card title="Как ваше полное имя?" icon="goggle-emoji">
        <div>
          <TextInput
            placeholder="Введите свое имя"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <Button txt="Далее" onClick={nextStep} />
        </div>
      </Card>
    </div>
  );
};

export default StepName;
