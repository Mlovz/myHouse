import axios from "axios";

export const sendOtp = async (data) => {
  const res = await axios.post("/api/send-otp", data);
  return res;
};

export const verifyOtp = async (data) => {
  const res = await axios.post("/api/verify-otp", data);
  return res;
};

export const activate = async (data, token) => {
  const res = await axios.post("/api/activate", data, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};
