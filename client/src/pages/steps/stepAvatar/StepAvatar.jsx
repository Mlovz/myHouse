import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../../store/slices/activateSlice";
import { activate } from "../../../http/index";
import { setAuth } from "../../../store/slices/authSlice";

const StepAvatar = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name, avatar, token } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/images/monkey-avatar.png");

  const captureImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  };

  const nextStep = async () => {
    try {
      const { data } = await activate({ name, avatar }, token);
      if (data.auth) {
        dispatch(setAuth(data));
      }
    } catch (err) {
      console.log(err);
    }

    // onNext();
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
      <Card title={`Ok, ${name}!`} icon="monkey-emoji">
        <p></p>
        <div>
          <img src={image} alt="" />
        </div>

        <div>
          <input type="file" accept="image/*" onChange={captureImage} />
        </div>

        <div>
          <Button txt="Далее" onClick={nextStep} />
        </div>
      </Card>
    </div>
  );
};

export default StepAvatar;
